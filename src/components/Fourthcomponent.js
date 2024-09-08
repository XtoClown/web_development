import React, { Component } from 'react'

export default class Fourthcomponent extends Component {
  render() {
    return (
      <div class="fourthComponentMain">
        <h1>Program.cs</h1>
        <div><span class="using">using</span> lr_one;</div>
        <div><span class="using">using</span> lr_one.Middleware;</div>
        <br></br>
        <div>var builder = WebApplication.<span class="func">CreateBuilder</span>(args);</div>
        <div>var app = builder.<span class="func">Build</span>();</div>
        <br></br>
        <div>app.<span class="func">Run</span>();</div>
      </div>
    )
  }
}
