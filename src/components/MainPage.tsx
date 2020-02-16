import React from 'react'
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
        return <div className="container">
        <h4 className="align-center">
            Lorem, ipsum
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dignissimos fugit esse laudantium? Pariatur dolorum sequi rerum mollitia facilis nulla suscipit eaque? Id accusantium, incidunt inventore magnam repellat sapiente enim, quam in ipsum quia delectus, deleniti nemo a autem. Corrupti, obcaecati. Aut ad officia quidem vitae optio libero ea minima quasi repellat est! Eius ab iure omnis laboriosam eum eos consectetur dicta impedit perspiciatis, inventore praesentium, iste necessitatibus debitis sit voluptas, repellat explicabo ipsa dolores? Earum eligendi vero iusto, natus ea voluptas quidem aliquam, dolore praesentium autem nesciunt accusantium quasi saepe provident harum modi, porro totam officia veniam. Nisi, voluptatum?</p>
        <Link to="/somewhere" className="waves-effect waves-light btn-large">Нажмите сюда</Link>
        </div>
}

export default MainPage;