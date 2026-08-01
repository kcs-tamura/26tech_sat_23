// src/components/Works.tsx

import { Link } from "react-router-dom";
import { works, type Work } from "../data/portfolio";
import SafeImg from "./SafeImg";

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="work-card">
      <div className="work-thumbnail">
        <SafeImg src={work.thumbnail} alt={work.title} fallback="no image..." />
      </div>
      <div className="work-body">
        <p className="work-category-badge">{work.genre}</p>
        <h3 className="work-title">{work.title}</h3>
        <p className="work-description">{work.description}</p>
        <p className="work-meta">
          期間：
          <span>{work.period}</span>
        </p>
        <p className="work-meta">
          プラットフォーム：
          <span>{work.platform?.join(" / ")}</span>
        </p>

        {/* 出展場所表示 */}
        {work.venues?.length > 0 && (
          <div className="work-venues">
            {work.venues.map((v, i) => (
              <span key={i} className="work-venue-tag">
                📍 {v.name} {v.date}
              </span>
            ))}
          </div>
        )}

        {/* タグ表示 */}
        <div className="work-tags">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 各種リンク表示 */}
        <div className="work-links">
          <Link to={`/works/${work.id}`} 
            className="btn btn-primary work-btn">
            詳細を見る→
          </Link>

          {work.github && (
            <a
              href={work.github}
              className="btn btn-outline work-btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          )}
          {work.link && (
            <a
              href={work.link}
              className="btn btn-outline work-btn"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <h2 className="section-title">
          <span>Works</span>
        </h2>
        <p className="section-sub">制作実績</p>

        <div className="works-grid">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
