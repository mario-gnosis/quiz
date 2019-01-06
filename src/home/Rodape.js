/* eslint-disable no-undef */
import React, { Component } from 'react'

const footerStyle = {
    background: "#ef8e38",    
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };
  
  function Footer({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
    );
  }

export class Rodape extends Component {
    
    render() {
        return (
            <div>
                <Footer float='botton' className="rodape">
                    <a className="centralizar" href="https://github.com/xumes/udemy-react-para-iniciantes" target="_blank" rel="noopener noreferrer">Github com o projeto</a>
                </Footer>
            </div>
        )
    }
}

export default Rodape
