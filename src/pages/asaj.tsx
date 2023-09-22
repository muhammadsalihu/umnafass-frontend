import Main from "src/layout/Main";

const Asaj = () => {
  return (
    <Main title="About">
      <div className="prose text-white my-6 prose-a:text-slate-300 prose-a:underline-offset-8">
        <p>
          Ahmad Salihu
        </p>
        <p>
          Electrical Engineer
        </p>


        <p>
          Wedding 2023
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/di4_F4dztRM?si=FIWDgzzNHItlYTaZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </Main>
  )
}

export default Asaj;


{/* <video controls width="100%">
  <source src="./asaj-wedding-video.mp4" type="video/mp4"
  />
  Sorry, your browser doesn't support videos.
</video> */}
