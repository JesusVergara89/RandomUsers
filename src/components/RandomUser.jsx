import React, { useState } from 'react'
import useRandom from '../hooks/useRandom'

const RandomUser = ({ first }) => {

    const [user, setUser] = useState(true)
    const [mail, setMail] = useState(false)
    const [birthday, setBirthday] = useState(false)
    const [myAddress, setMyAddress] = useState(false)
    const [phone, setPhone] = useState(false)
    const [password, setPassword] = useState(false)

    const userFunction = () => {
        setUser(true)
        setMail(false)
        setBirthday(false)
        setMyAddress(false)
        setPhone(false)
        setPassword(false)
    }
    

    const oneParameter = (e) => {
        if (e === 'A') {
            setUser(true)
            setMail(false)
            setBirthday(false)
            setMyAddress(false)
            setPhone(false)
            setPassword(false)
        } else {
            if (e === 'B') {
                setUser(false)
                setMail(true)
                setBirthday(false)
                setMyAddress(false)
                setPhone(false)
                setPassword(false)
            } else {
                if (e === 'C') {
                    setUser(false)
                    setMail(false)
                    setBirthday(true)
                    setMyAddress(false)
                    setPhone(false)
                    setPassword(false)
                } else {
                    if (e === 'D') {
                        setUser(false)
                        setMail(false)
                        setBirthday(false)
                        setMyAddress(true)
                        setPhone(false)
                        setPassword(false)
                    } else {
                        if (e === 'E') {
                            setUser(false)
                            setMail(false)
                            setBirthday(false)
                            setMyAddress(false)
                            setPhone(true)
                            setPassword(false)
                        } else {
                            if (e === 'F') {
                                setUser(false)
                                setMail(false)
                                setBirthday(false)
                                setMyAddress(false)
                                setPhone(false)
                                setPassword(true)
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * boolean ? result1 : result2
     * 
     * boolean ?
     * 
     * result1
     * :
     * result2
     */

    const getUser = useRandom(first,userFunction)

    //console.log("this is console", getUser?.results[0])
    let data3
    if (getUser) {
        let data1 = (getUser?.results[0].dob.date).slice(0, 10)
        let data2 = data1.split("-")
        data3 = `${data2[2]}/${data2[1]}/${data2[0]}`
    } else {
        data3 = "1960/05/15"
    }



    return (
        <article className="user">

            <div className="upper-main">

            </div>

            <div className="lower-main">

                <div className="main-photo">
                    <div className="circle">
                        <img src={getUser?.results[0].picture.large} alt="profile-photo" />
                    </div>
                </div>

                <div className="main-info">

                    {user ?
                        <>
                            <p className="introduction">
                                Hi, my name is
                            </p>
                            <h4 className="main-name">
                                {getUser?.results[0].name.first} {getUser?.results[0].name.last}
                            </h4>
                        </>
                        :
                        ''
                    }

                    {mail ?
                        <>
                            <p className="introduction">
                                My email address is
                            </p>
                            <h4 className="main-name">
                                {getUser?.results[0].email}
                            </h4>
                        </>
                        :
                        ''
                    }

                    {birthday ?
                        <>
                            <p className="introduction">
                                My birthday is
                            </p>
                            <h4 className="main-name">
                                {data3}
                            </h4>
                        </>
                        :
                        ''
                    }

                    {myAddress ?
                        <>
                            <p className="introduction">
                                My address is
                            </p>
                            <h4 className="main-name">
                                {getUser?.results[0].location.street.number} {getUser?.results[0].location.street.name}
                            </h4>
                        </>
                        :
                        ''
                    }

                    {phone ?
                        <>
                            <p className="introduction">
                                My phone number is
                            </p>
                            <h4 className="main-name">
                                {getUser?.results[0].cell}
                            </h4>
                        </>
                        :
                        ''
                    }

                    {password ?
                        <>
                            <p className="introduction">
                                My password is
                            </p>
                            <h4 className="main-name">
                                {getUser?.results[0].login.password}
                            </h4>
                        </>
                        :
                        ''
                    }

                    <div className="information">
                        <button onClick={() => oneParameter('A')}><i className='bx bx-user'></i></button>
                        <button onClick={() => oneParameter('B')}><i className='bx bx-envelope' ></i></button>
                        <button onClick={() => oneParameter('C')}><i className='bx bxs-calendar' ></i></button>
                        <button onClick={() => oneParameter('D')}><i className='bx bx-map'></i></button>
                        <button onClick={() => oneParameter('E')}><i className='bx bx-phone-call' ></i></button>
                        <button onClick={() => oneParameter('F')}><i className='bx bxs-lock-alt' ></i></button>
                    </div>
                </div>

            </div>



        </article>
    )
}

export default RandomUser