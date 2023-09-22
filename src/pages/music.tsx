import Main from "../layout/Main"

const Music = () => {
  return (
    <Main>
      <div className="mt-12">
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/album/1dpCSq8YG0czhNZGwh4bnj?utm_source=generator"
          width="100%"
          height={352}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Main>
  )
}

export default Music;
