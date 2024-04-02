
import React from 'react';
import { retrieveAllNbaTeams } from '@/utils/API/BDL/Team';
import TeamCard from '../Components/Team/TeamCard';


export default async function Index() {

    const teams = await retrieveAllNbaTeams()

    return <section className='min-w-screen flex flex-col justify-center'>
            <div className='border border-black'>
                <h1 className= "" role="title"><strong>NBA stat tracker</strong></h1>
                <div className=''>
                    <h3>An application focused on retrieving stats on current NBA players.</h3>
                    <div>
                        <p>View season averages of any current NBA player</p>
                        <p>View the current roster of a given team</p>
                    </div>
                </div>

            </div>
            <div className=''>
                <p className='text-center'><strong className='w-full text-center'>Current Teams</strong></p>
                <div className='flex flex-wrap justify-center'>
                    {
                        teams.map((team, key) => {
                            return <TeamCard team={team} key={key} />
                        })
                    }
                </div>

            </div>
    </section>;
}




