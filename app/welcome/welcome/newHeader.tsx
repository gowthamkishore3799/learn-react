import "./index.css";

function NewHeader(){

    return (
      <>
        <div className="background">
          <div className="header">
            <div className="section">
              <header>Welcome to React Fundamentals Asshole</header>
            </div>
            <div className="section">
              <a data-type="link" href="https://www.google.com">
                Click here
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
function Body(){
    return (
      <div className="body-background">
        <div>
          <article className="image-container">
            <img
              src="https://picsum.photos/200/300"
              alt="Logo"
              className="image"
            />
            <p>
              Life’s difficulty often lies in its unpredictability and the
              constant demand to adapt. As we grow, the nature of our problems
              shifts—childhood fears turn into adult responsibilities, and
              dreams sometimes collide with reality. There's pressure to
              succeed, to meet societal and personal expectations, and to find
              stability in a world that keeps changing. Emotional pain from
              failed relationships, grief from loss, or the loneliness that can
              come even when surrounded by people, all contribute to the weight
              life can carry. There’s also the silent struggle—mental health
              battles like anxiety, depression, or burnout—that aren't always
              visible but deeply affect daily functioning. The pursuit of
              purpose can feel like wandering without a map, especially when our
              efforts don’t yield immediate results. Financial hardships, health
              issues, or systemic inequalities add another layer of stress,
              making even the simplest goals feel distant. Despite these
              challenges, life’s difficulty is not entirely negative—it can
              teach us patience, empathy, and resilience. Struggle often becomes
              the catalyst for growth, perspective, and appreciation for the
              good moments. Hardships connect us in our shared humanity,
              reminding us that while the path may be tough, we’re not walking
              it alone.
            </p>
          </article>
        </div>
        <div className="countries">
          <div className="title">
            <h1 className="heading">
              <strong>All countries</strong>
            </h1>
            <ul className="list">
              <li>Argentina</li>
              <li>Aland Islands</li>
              <li>Albania</li>
              <li>Algeria</li>
              <li>USA</li>
              <li>Andorra</li>
              <li>Algeria</li>
              <li>Brasil</li>
              <li>Andorra</li>
              <li>American Samoa</li>
              <li>Andorra</li>
              <li>India</li>
              <li>Argentina</li>
            </ul>
          </div>
        </div>
        <div className="flex-playground">
          <div className="box">
            <p>First Box</p>
          </div>
          <div className="box">
            <p>First Box</p>
          </div>
          <div className="box">
            <p>First Boxasdasdda ads</p>
          </div>
        </div>
        {/* <div className="grid-playground">
          <div className="box">
            <p>First Box</p>
          </div>
          <div className="box1">
            <p> Second Box</p>
          </div>
          <div className="box2">
            <p> Third Box</p>
          </div>
        </div> */}
        <div className="layout-background">
          <div className="message-box">
          <p> Victory 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
  </svg>
  </p>
          </div>
        </div>
      </div>
    );
}

export default function LandingPage(){
    return(
        <>
        <NewHeader/>
        <Body/>
        </>
    )
}