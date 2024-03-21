import React from "react";
import List from "./List";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';  

function Paste() {
    const Log = "LOG";
    const [newLogValue, setNewLogValue] = useState("");
    const [logList, setLogList] = useState([]);

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items && items.length>0) {
            setLogList(items);
        } else {
            setLogList([{ text: 'First things first, \nFor new features and suggestions you can email us to : logspate@gmail.com. \n'+
            'To support keeping this site up and running which is around $800/month, you can Zelle your contribution to 781-354-1793.\n\n\n'+
            'LogSPATE: It\'s a scratch space for you. In Short, Whatever you type on the pad on left and click LOG, I will record it. \nYou can use it every day for writing daily TODOs or Tasks whether in the office or at home.\n\n'+ 
            'It\'s especially useful in the office when you have multiple tabs open and you\'re constantly moving text from one tab to another.'+ 
            'How annoying is it to keep switching tabs repeatedly to copy tidbits and how annoring is to stick sticky notes on computer screen? You can DOCK LogSPATE to the right of your screen ( A Linux feature ) on Mac / Linix / Windows and keep logging all your records.'+
            'Once you\'re done, you can simply click on the record and it will be copied automatically. '+ 
            'This is just one of its many uses. Other examples include:\n\n\n'+ 

                '1. Technical interviewers and candidates can use it.\n'+ 
                '2. Software developers who want to keep a record of all user IDs, passwords, DB connection strings, etc.\n'+ 
                '3. Book writers who are brainstorming ideas they don\'t want to lose.\n'+ 
                '4. Everyone in general who wants to create a daily to-do list.\n\n\n\nThis site is 100% secure because we dont transfer data to server - EVERYTHING IS LOCAL to your machine. \n\n\nThank you\nLogSpate Team'+
                ''+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                '\n'+
                'Start..', 
                id: 1, dtLocal: new Date().toLocaleString('en-US') }]);
            }
        }, []);

    const appendToList = () => {
        const newLogList = [{ text: newLogValue, id: logList.length + 1, dtLocal: new Date().toLocaleString('en-US') }, ...logList];
        setLogList(newLogList);
        setNewLogValue(""); // Reset the text area value
        localStorage.setItem('items', JSON.stringify([{ text: newLogValue, id: logList.length + 1, dtLocal: new Date().toLocaleString('en-US') }, ...logList]));
    };

    const clearList = () => {
        setLogList([]);
    }
    
    const clearPad = () => {
        setNewLogValue(""); // Clear the textarea value
    }

    const handleTextareaChange = (e) => {
        setNewLogValue(e.target.value); // Update the textarea value in the state
    };

    const clearListPermanently = (e) => {
        localStorage.clear();
        setLogList([]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          e.preventDefault(); // Prevent the default behavior of moving focus
          const textarea = e.target;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          // Insert the tab at the caret position
          textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
          // Move the caret position after the inserted tab
          textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
      };

    return (<>
        <div style={{height: '100%', display: 'flex' }}>
            <div style={{height: '100%', flex: 1}}>
                <textarea 
                    style={{width: '84%', height: '78%', display: "block", marginLeft: '3%', fontSize: 20, verticalAlign: 'top', border: '13px solid #332233', background: '#708090', touchAction: "manipulation"}}
                    value={newLogValue} // Set the value of the textarea to newLogValue
                    onKeyDown={handleKeyDown}
                    onChange={handleTextareaChange} // Update the state as the user types
                ></textarea>
                <Button variant="dark" onClick={appendToList} style={{width: '84%', height: '3%', display: "block", float:'left', marginLeft: '3%', marginBottom: '0.5%', marginTop: '0.5%'}}>LOG</Button>
                <Button variant="dark" onClick={clearPad} style={{width: '84%', height: '3%', display: "block", float:'left', marginLeft: '3%', marginBottom: '0.5%', marginTop: '0.0%'}}>Clear Text Pad</Button>
                <Button variant="dark" onClick={clearList} style={{width: '84%', height: '3%', display: "block", float:'left', marginLeft: '3%', marginBottom: '0.5%', marginTop: '0.0%'}}>Clear All Logs - (NOT Permanent Delete)</Button>
                <Button variant="dark" onClick={clearListPermanently} style={{width: '84%', height: '3%', display: "block", float:'left', marginLeft: '3%', marginBottom: '0.5%', marginTop: '0.0%'}}>Clear Storage (Permanent Delete)</Button>
            </div>
            <div style={{height: '100%', flex: 2, overflow:'auto'}}>
                <pre>
                    <List logList={logList}></List>
                </pre>
            </div>
        </div>
    </>);
}

export default Paste;
