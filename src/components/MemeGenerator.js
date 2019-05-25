import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: '',
            allMemeImgs: []        
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    changeHandler(e) {
        const {name, value} = e.target
        this.setState({ [name]: value})
    }

    submitHandler(e) {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({randomImg: this.state.allMemeImgs[randNum].url})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.submitHandler}>
                    <input type="text" 
                    placeholder="Top Text" 
                    name="topText" 
                    value={this.state.topText} 
                    onChange={this.changeHandler} />

                    <input type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText" 
                    value={this.state.bottomText}   
                    onChange={this.changeHandler} />

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2> 
                    <h2 className="bottom">{this.state.bottomText}</h2> 
                </div>
            </div>
        )
    }
}

export default MemeGenerator