import './portfolio.css';
import ME from '../../assets/ME.jpg';


    
const data = [
    {
        id:1,
        image:ME,
        title:'This is a portfolio item title',
        github:'http//www.github.com',
        demo:'http//www.github.com',
    },
    {
        id:2,
        image:ME,
        title:'Friend-Zone',
        github:'http//www.github.com',
        demo:'http//www.github.com',
    },
    {
        id:3,
        image:ME,
        title:'Omni Food',
        github:'http//www.github.com',
        demo:'http//www.github.com',
    },
]

const Portfolio = () => {

    return ( 
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portolio__container'>
                {
                    data.map(({id,image, title, github,demo}) =>{
                        return(
                            <article key={id} className='protfolio__item'>
                                <div className='portfolio_item_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio_item_cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                    )
                            })
                }
            </div>
        </section>
     );
}
 
export default Portfolio;