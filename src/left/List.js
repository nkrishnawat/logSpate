import React from "react";

const List = (props)  =>{
    const lItems = props.logList;
    const liItems = lItems.map(el => 
            <li key={el.id}><div style={{display: "flex"}}>
                                <div style={{flex: 3}}>{el.dtLocal} </div>
                                <div style={{flex: 16}} onClick={() => (navigator.clipboard.writeText(el.text))}>{el.text}</div>
                            </div></li>
        )
    
    return <ul style={{color: "white", marginLeft: '0%'}}>{liItems}</ul>;
}

export default List;