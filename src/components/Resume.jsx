import React from 'react'
import ResumeItem from './ResumeItem'
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import {FaRegMoneyBillAlt} from 'react-icons/fa'

const Resume = ({income, expense, total}) => {
  return (
    <div className='container'>
        <ResumeItem title="Entradas" value={income} Icon={HiArrowSmUp} />
        <ResumeItem title="Saídas" value={expense} Icon={HiArrowSmDown}/>
        <ResumeItem title="Total" value={total} Icon={FaRegMoneyBillAlt}/>
    </div>
  )
}

export default Resume