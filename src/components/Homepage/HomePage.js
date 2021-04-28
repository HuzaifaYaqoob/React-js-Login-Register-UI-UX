
import {Link} from 'react-router-dom'


function HomePage(){
    return(
        <div>
            <div className='btn shadow'>
                <Link to='/login'>Login</Link>
            </div>
            <div className = 'btn shadow'>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}

export default HomePage