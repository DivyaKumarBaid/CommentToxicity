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

## Dependencies
`!pip install tensorflow tensorflow gpu pandas matplotlib sklearn`
