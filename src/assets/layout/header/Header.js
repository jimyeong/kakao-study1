import React from 'react';
import './header.scss';
const editTools = {
    left : [
        {
            friends:'manage',

        },
        {
            chats:'edit',

        },
        {
            chat:'edits',

        },
        {
            friends:'',

        },

    ],
    right : [
        {cog : ''}
    ]

}
const Root = 'http://localhost:8080/';

class Header extends React.Component{

    componentDidMount() {


    }
    constructor(props){
        super(props);
        this.state={


        }

    }
    renderTask(){
        if(location.href == Root){
            return (
                <div className="header-bottom">
                    <span className="header-bottom__tool header__bottom-left">
                        manage
                    </span>
                    <span className="header-bottom__tool">
                        friends
                        <span className="header-bottom__number">1</span>
                    </span>
                    <span className="header-bottom__tool header-bottom__right" menu={editTools}>
                        <svg aria-hidden="true" data-prefix="fas" data-icon="cog" className="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"></path></svg>
                    </span>
                </div>
            )
        }else if(location.href == Root+'chats' ){
            return(
                <div className="header-bottom">
                    <span className="header-bottom__tool header__bottom-left">
                        edit
                    </span>
                    <span className="header-bottom__tool">
                        chats
                    </span>
                    <span className="header-bottom__tool header-bottom__right" menu={editTools}>
                        <svg aria-hidden="true" data-prefix="fas" data-icon="cog" className="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"></path></svg>
                    </span>
                </div>
            )
        } else if(location.href == Root+'find'){
            return(
                <div className="header-bottom">
                    <span className="header-bottom__tool header__bottom-left">
                        edit
                    </span>
                    <span className="header-bottom__tool">
                        find
                    </span>
                    <span className="header-bottom__tool header-bottom__right" menu={editTools}>
                    </span>
                </div>
            )
        }else if(location.href == Root+'more'){
            return(
                <div className="header-bottom">
                    <span className="header-bottom__tool header__bottom-left">
                    </span>
                    <span className="header-bottom__tool">
                            more
                    </span>
                    <span className="header-bottom__tool header-bottom__right" menu={editTools}>
                            <svg aria-hidden="true" data-prefix="fas" data-icon="cog" className="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"></path></svg>
                    </span>
                </div>
            )
        }
        else{
            return (
                <span className="header-bottom__tool header__bottom-left">

                    </span>
            )
        }
    }
    render(){
        return(
            <div className="header">
                <div className="header-top">
                    <span className="header-top__icons">
                        <span className="header-top__state">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="plane" className="svg-inline--fa fa-plane fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className="fill" fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path></svg>
                        </span>
                        <span className="header-top__state">
                             <svg aria-hidden="true" data-prefix="fas" data-icon="wifi" className="svg-inline--fa fa-wifi fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path className="fill" fill="currentColor" d="M384 416c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm136.659-124.443c6.465-6.465 6.245-17.065-.564-23.167-113.793-101.985-286.526-101.869-400.19 0-6.809 6.102-7.029 16.702-.564 23.167l34.006 34.006c5.927 5.927 15.464 6.32 21.769.796 82.88-72.609 207.074-72.447 289.768 0 6.305 5.524 15.842 5.132 21.769-.796l34.006-34.006zm112.11-113.718c6.385-6.385 6.254-16.816-.35-22.973-175.768-163.86-449.134-163.8-624.837 0-6.604 6.157-6.735 16.589-.35 22.973l33.966 33.966c6.095 6.095 15.891 6.231 22.224.383 144.763-133.668 368.356-133.702 513.156 0 6.333 5.848 16.129 5.712 22.224-.383l33.967-33.966z"></path></svg>
                        </span>
                    </span>
                    <span className="header-top__time">
                        10:30
                    </span>
                    <span className="header-top__icons">
                        <span className="header-top__state">
                            <svg aria-hidden="true" data-prefix="far" data-icon="moon" className="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path></svg>
                        </span>

                        <span className="header-top__state">
                           <svg aria-hidden="true" data-prefix="fab" data-icon="bluetooth-b" className="svg-inline--fa fa-bluetooth-b fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z"></path></svg>
                        </span>
                        <span className="header-top__state">66%</span>
                        <span className="header-top__state">
                           <svg aria-hidden="true" data-prefix="fas" data-icon="battery-three-quarters" className="svg-inline--fa fa-battery-three-quarters fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z"></path></svg>
                        </span>
                    </span>
                </div>
                {
                    this.renderTask()
                }
            </div>
        )
         }
}


export default Header;

function RenderEditTool() {
    return(
        <span className='header-bottom__tool'>
        </span>
    )
}


