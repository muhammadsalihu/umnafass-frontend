import Main from "../layout/Main"

const Music = () => {
  return (
    <Main>
      <div className="mt-12">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1dpCSq8YG0czhNZGwh4bnj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </Main>
  )
}

export default Music;
