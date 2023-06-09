import './App.css'
import React from 'react'
import PrevComments from './components/PrevComments';
import CommentTextBox from './components/CommentTextBox';
import { SnackbarProvider } from 'notistack'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import CommentProvider from './context/CommentProvider';

function App() {
  return (
    <CommentProvider>
      <SnackbarProvider>
        <div className="w-[100%] min-h-[100vh] bg-[var(--bg-color)] flex flex-col items-center p-2 md:p-8 gap-4">
          <div className="bg-[var(--box-color)] w-[100%] shadow-[0px_0px_10px_var(--shadow)] rounded-lg flex gap-8 justify-between p-4 md:px-8 items-center">
            <div className='flex flex-col items-start md:text-left text-center gap-2'>
              <div className='w-[100%] font-["Montserrat"] tracking-widest text-bold text-2xl md:text-4xl text-[var(--base-theme)]'>Commentify</div>
              <div className='md:max-w-[50vw] font-["Montserrat"] tracking-wider text-xs md:text-sm text-[var(--base-theme)]'>Model that toggles comment if it is found having any element that is toxic, severe_toxic, obscene, threat, insult, identity_hate</div>
            </div>
            <div className='items-center gap-8 hidden md:flex'>
              <a href="https://www.linkedin.com/in/divyakumarbaid/"><div className="flex items-center justify-center rounded-[50%] bg-[var(--light-base-theme)] w-[60px] h-[60px] shadow-[0px_0px_16px_rgba(0,0,0,0.5)]"><BsLinkedin className='text-2xl text-white opacity-90' /></div>
              </a>
              <a href="https://github.com/DivyaKumarBaid/CommentToxicity"><div className="flex items-center justify-center rounded-[50%] bg-[var(--light-base-theme)] w-[60px] h-[60px] shadow-[0px_0px_16px_rgba(0,0,0,0.5)]"><BsGithub className='text-3xl text-white opacity-90' /></div></a>
            </div>
          </div>
          <div className="bg-[var(--box-color)]  w-[100%] min-h-[70vh] shadow-[0px_0px_8px_var(--shadow)] rounded-lg flex md:flex-row flex-col gap-2 items-start md:p-8 p-2 md:justify-between">
            <CommentTextBox />
            <PrevComments />
          </div>
        </div>
      </SnackbarProvider>
    </CommentProvider>
  )
}

export default App
