# Comment Toxicity

## Game Plan
- Loading Data
- Preprocessing Comments
- Craeting A Deep NLP Model
- Evaluating Model Performace
- Creating a gradio DL App

## Process
Sentences -> word -> each word is tokenized -> Each token is embedded -> 

_tokenized : each work is mapped to a integer representation using keras_

_Dataset from kaggle competition - Toxic Commment Classification Challange_

_LSTM is used for those embedded tokens_

- Installing dependencies and Import Dataset
- Preprocess
- Create Sequential Model
- Make predictions
- Evaluate Model

The Dataset test output contains these parameters as in binary 1 -> present 0 -> absent
- toxic
- severe_toxic
- obscene
- threat
- insult
- identity_hate

## How to ?
- The repository is divided into 3 parts 
    - Backend - build on FastApi
    - Frontend - Build on React/Vite
    - base_model_v1 - Build in Jupyter Notebook
- Clone the repo and make sure you are using the correct directory while using the command for a particular library
- Backend has an env which is there in the as env-sample, similarly for the frontend part, an env-sample has the content, for the jupyter notebook the dataset is uploaded

## Hosting the repository
- Backend - FastApi can be hosted on space (previously known as deta) or on Heroku (if you have dynos) or on render.com 
- Frontend - React can be hosted on vercel or netlify
- Model -Jupyter can be used on google collab or kaggle 

## Dependencies
- Backend - use `pip install -r requirements.txt`
- frontend - use `npm i`
- Jupyter - its there on the first column

