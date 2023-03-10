import React,{useState,useEffect} from 'react';

export default function Clock() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div className='clock'>
            {/* <CalenderIcon /> */}
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p><hr />
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}
