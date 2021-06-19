import style from '../styles/components/Button.module.css'
interface props {
  background: string;
  name: string;
}

export function Button(props: props){
  return (
   <div>
     <button className={style.button} type="button" style={{background: `${props.background }`}} >{props.name}</button>
   </div>
  )
}