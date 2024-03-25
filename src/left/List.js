import React from "react";

const List = (props)  =>{

    const dbClickFired = (ev, id) => {
        const delList = props.logList.filter(item => item.id !== id);
        let length = props.logList.length-1;

        delList.map( el => {
            el.id = length;
            length--;
        });

        //alert(JSON.stringify(delList));

        props.setLogList(delList);
        
    }
    
    const lItems = props.logList;
    const liItems = lItems.map(el => 
            <li key={el.id}><div style={{display: "flex"}}>
                                <div style={{flex: 3, fontSize: 10}} onDoubleClick={(e) => dbClickFired(e, el.id)}>{el.dtLocal} </div>
                                <div style={{flex: 16}} onClick={() => (navigator.clipboard.writeText(el.text))}>{el.text}</div>
                            </div></li>
        )
    
    return <ul style={{color: "white", marginLeft: '0%'}}>{liItems}</ul>;
}

export default List;