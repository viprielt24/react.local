import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor doloribus, facilis illum laudantium mollitia nisi nobis quia quidem repellat!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd Semptember, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

