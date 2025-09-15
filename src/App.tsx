import { useState } from "react";
import YouTube from "react-youtube";

const videos = [
    { title: "Part 7 01 1", id: "1Dhk3XQGb0Y" },
    { title: "Part 7 01 2", id: "poc4VeVbVgw" },
    { title: "Part 7 01 3", id: "zBTWPm3-Joc" },
    { title: "Part 7 02 1", id: "Ekvc7pc-Iy4" },
    { title: "Part 7 02 2", id: "zCkUcm3UjKQ" },
    { title: "Part 7 02 3", id: "ubWF9ZuEaBc" },
    { title: "Part 7 03 1", id: "GLWk9HkVH58" },
    { title: "Part 7 03 2", id: "AJ2254eVpIA" },
    { title: "Part 7 03 3", id: "CrwcjRZ-mw8" },
    { title: "Part 7 04 1", id: "J3dX_iygF08" },
    { title: "Part 7 04 2", id: "t8_wRkRfycc" },
    { title: "Part 7 04 3", id: "0TJ7MwdrGuk" },
];

export default function App() {
    const [currentVideo, setCurrentVideo] = useState(videos[0].id);

    const opts = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            fs: 1,
            vq: "hd1080",
        },
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <header>
                <h1>📺 TOEIC Practice</h1>
            </header>

            {/* Player */}
            <div
                style={{
                    width: "100%",
                    maxWidth: 600,
                    margin: "0 auto",
                    background: "rgba(0,0,0,0.7)",
                    boxShadow: "0 4px 22px -4px rgba(0,0,0,0.45)",
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    marginTop: 16,
                }}
            >
                <YouTube
                    videoId={currentVideo}
                    opts={opts}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            {/* Danh sách video */}
            <section style={{ padding: "24px 16px" }}>
                <h2
                    style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "#cbd5e1",
                        marginBottom: 12,
                    }}
                >
                    Danh sách video
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                        marginTop: 16,
                    }}
                >
                    {videos.map((v) => {
                        const active = currentVideo === v.id;
                        return (
                            <button
                                key={v.id}
                                onClick={() => setCurrentVideo(v.id)}
                                style={{
                                    position: "relative",
                                    borderRadius: 14,
                                    padding: "14px 16px",
                                    textAlign: "left",
                                    background: active
                                        ? "#1d8fff"
                                        : "rgba(30,41,59,0.7)",
                                    border: active
                                        ? "1px solid #1d8fff"
                                        : "1px solid rgba(255,255,255,0.07)",
                                    boxShadow: active
                                        ? "0 4px 16px -2px #1d8fff44"
                                        : "0 2px 8px -2px rgba(0,0,0,0.18)",
                                    color: active ? "#fff" : "#f1f5f9",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    transition:
                                        "background 0.18s, box-shadow 0.18s, border-color 0.18s",
                                    cursor: "pointer",
                                    marginBottom: 0,
                                }}
                            >
                                <span>{v.title}</span>
                                {active && (
                                    <span
                                        style={{
                                            marginTop: 4,
                                            display: "inline-block",
                                            fontSize: 10,
                                            textTransform: "uppercase",
                                            color: "#fff",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        Đang phát
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    marginTop: "auto",
                    padding: 16,
                    fontSize: "0.85rem",
                    textAlign: "center",
                    color: "#64748b",
                }}
            >
                © {new Date().getFullYear()} TOEIC Practice
            </footer>
        </div>
    );
}
