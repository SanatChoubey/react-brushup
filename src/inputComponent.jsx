import React  from 'react';
import { Input } from '@chakra-ui/react'

// const letsFindPrimeFunc = () => {
//     let isPrime = false
//     for(let i = 3; i < 936868033; i++){
//         if(936868033 % i === 0) {
//             isPrime = false
//         }else {
//             isPrime = true
//         }
//     }
//     return isPrime
// }
const ReusableInput = ({onChange, enterEvent}) => {
    console.log('Input Component: I`m also rendering! 🤪')
    // const isPrime = letsFindPrimeFunc()
    // console.log('isPrime', isPrime);
    return <Input w="4xl" type={'text'} placeholder={"Enter your todo task!"} onKeyDown={enterEvent} onChange={onChange} />
}
export default ReusableInput;
// 936868033
// 29355126551