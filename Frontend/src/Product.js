import "../style.css";
const Produt=(props)=>{
    const {resData} =props;
    const{company ,Ram , Processer,Image,SSd}=resData
    return(
        
        <div className="card" >
            <img src={Image}/>
            <h1>{company}</h1>
            <h2>{Ram}</h2>
            <h2>{Processer}</h2>
            <h2>{SSd}</h2>

        </div>
        
    )
}
export default Produt;