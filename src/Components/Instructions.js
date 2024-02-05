import { TypeAnimation } from "react-type-animation";
import '../App.css'

const Instructions = () => {
    return (
        <div>
        <div class="instructions">
            <a href="#popUp">Instructions from John Connor</a>
        </div>
        <div id="popUp" class="intro">
            <div class="content"> 
            <TypeAnimation
            sequence={[
                "Welcome to our mission to thwart Skynet and prevent Judgment Day alongside John Connor! Before Skynet's activation, we managed to implement a backdoor measure, our best attempt to ensure humanity's survival. In this dire situation, our last hope lies in a game of Rock, Paper, and Scissors. Play your best moves to secure mankind's fate. If victory seems unattainable, the ultimate gamble is to throw the terminal into the lava, praying it doesn't escape into the vast realms of the internet. May the Rock, Paper, and Scissors be our allies in this battle for humanity!",
                1000,
            ]}
            wrapper="span"
            speed={25}
            style={{ fontSize: '1.5em', display: 'inline-block'}}
            repeat={Infinity}
            />
            
                <a href="#" class="box-close">X</a>
            </div>
        </div> 
    </div> 
    );
}
export default Instructions;
