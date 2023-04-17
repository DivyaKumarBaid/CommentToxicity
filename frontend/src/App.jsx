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
        <div className="w-[100%] min-h-[100vh] flex flex-col items-center p-2 md:p-8 gap-4">
          <div className="w-[100%] shadow-[0px_0px_8px_var(--shadow)] rounded-lg flex gap-8 justify-between p-4 md:px-8 items-center">
            <div className='flex flex-col items-start md:text-left text-center gap-2'>
              <div className='w-[100%] font-["Montserrat"] tracking-widest text-bold text-2xl md:text-4xl text-[var(--base-theme)]'>Commenticity</div>
              <div className='md:max-w-[50vw] font-["Montserrat"] tracking-wider text-xs md:text-sm text-[var(--base-theme)]'>Model that toggles comment if it is found having any element that is toxic, severe_toxic, obscene, threat, insult, identity_hate</div>
            </div>
            <div className='items-center gap-8 hidden md:flex'>
              <a href="https://www.linkedin.com/in/divyakumarbaid/"><div className="flex items-center justify-center rounded-[50%] bg-[var(--light-base-theme)] w-[45px] h-[45px] shadow-md"><BsLinkedin className='text-xl' /></div>
              </a>
              <a href="https://github.com/DivyaKumarBaid?tab=repositories"><div className="flex items-center justify-center rounded-[50%] bg-[var(--light-base-theme)] w-[45px] h-[45px] shadow-md"><BsGithub className='text-2xl' /></div></a>
            </div>
          </div>
          <div className="w-[100%] min-h-[70vh] shadow-[0px_0px_8px_var(--shadow)] rounded-lg flex md:flex-row flex-col gap-2 items-start md:p-8 p-2 md:justify-between">
            <CommentTextBox />
            <PrevComments />
          </div>
        </div>
      </SnackbarProvider>
    </CommentProvider>
  )
}

export default App
