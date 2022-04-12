import  { FC } from 'react'
import './GroupButton.scss'

const GroupButton: FC = ({children}) => {
    return <div className={'btnGroup-container'}>
        {children}
    </div>
}

export default GroupButton;