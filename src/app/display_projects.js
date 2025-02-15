import "./project.css"

export default function Projects({name} ){
    console.log({name});
    return (
        <div className={name}>
            <div className="Pcontents"></div>
        </div>
    )
        
    
}