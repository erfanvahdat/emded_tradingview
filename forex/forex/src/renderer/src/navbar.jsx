

import "./app.css"

export default function Navbar(){

    return(
        <div>
            
    <nav class="navbar 
                   navbar-expand-lg 
                   navbar-dark 
                   bg-dark">
<a class="navbar-brand" href="#"><img src="./src/assets/steel.jpg" alt="" width="30"height="30"/></a>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Geeksforgeeks
            </a>
            <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active">
                            Courses
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Tutorials
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Jobs
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" 
                           href="#" 
                           tabindex="-1">
                            Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Contests
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    </div>

    )
}

