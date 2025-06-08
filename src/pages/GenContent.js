import React from "react";
import "./pages.css"; 

export default function GenContent() {
    return (
        <div>
            <div className="gen-content">

                <h2>Generate Content For Your Blog</h2>
                <input type="text" name="title" id="title-area" placeholder="Title" />
                <textarea name="desc" id="desc-area" rows={5} placeholder="Description"></textarea>
                <input type="text" name="keywords" id="keyword-area" placeholder="Keywords" />
                <input type="number" name="words" id="words-area" placeholder="Number of Words (Min:100 / Max:1000)" />
                <button className="gen-btn">Generate</button>
            </div>
        </div>
    )
}