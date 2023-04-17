from fastapi import Depends, APIRouter, HTTPException, status
import uuid
from routes.schema import (ModelGenerateParams,Comment)
import tensorflow as tf
import numpy as np
import os
import config.database as db
import time
from datetime import datetime

# toxic
# severe_toxic
# obscene
# threat
# insult
# identity_hate

router = APIRouter(tags=["Comment_toxicity"], prefix="/comment")

@router.get('/', status_code=201)
def get_all_comment():
    try:
        comments = []
        cursor = db.comment_col.find().limit(10).sort("_id", -1)
        if cursor:
            for res in cursor:
                comments.append(Comment(**res))

        return comments

    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@router.post('/generate', status_code=201)
def rank_comment(data:ModelGenerateParams):
    try:
        # loading vectorizer to tokenize text
        loaded_vectorizer_model = tf.keras.models.load_model(os.path.dirname(__file__)+'/vectorizer')
        loaded_vectorizer = loaded_vectorizer_model.layers[0]
        input_text = loaded_vectorizer(data.input)
        # loading model to predict
        model = tf.keras.models.load_model(os.path.dirname(__file__)+"/saved_model/kaggle.h5")
        res = model.predict(np.expand_dims(data.input,0))
        res_arr = res.flatten()>0.5
        now = datetime.now()
        current_date = str(now.date())
        curr_time = str(time.strftime("%H:%M:%S", time.localtime()))

        commented = Comment(
            comment=data.input,
            toxic = res_arr[0],
            severe_toxic = res_arr[1],
            obscene = res_arr[2],
            threat = res_arr[3],
            insult = res_arr[4],
            identity_hate = res_arr[5],
            visible=True,
            time={current_date+" "+curr_time}
        )
        return commented

    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
