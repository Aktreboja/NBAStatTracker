import React from 'react';
import PlayerAverages from '../../Components/PlayerAverages';
import PlayerCard from '../../Components/Player/PlayerCard';


import { AiOutlineInfoCircle, AiOutlineClose }  from 'react-icons/ai'


import { GetServerSideProps } from 'next';

const Player = () => {   

    return (
        <section className = "playerContainer"> 

        </section>
    )
}

export const getServerSideProps = (async (context) => {
    const player = context.params?.player;
    if (!player){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return { props : {}}
}) satisfies GetServerSideProps

export default Player;
