import PrivacyContent from "./PrivacyContent";
import React, { useState, useEffect } from "react";
import MapPage from "./MapPage";

const COLORS = {
  primary: "#8c79e0",
  accent: "#ee7690",
  warning: "#f29e38",
  teal: "#5bc1be",
  dark: "#181818",
  bg: "#f6f7fb",
};

export default function App() {
  const [page, setPage] = useState("home");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("ratings");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const saveData = (entry: any) => {
    const updated = [...data, entry];
    setData(updated);
    localStorage.setItem("ratings", JSON.stringify(updated));
  };

  // --- Components ---
  const Nav = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>🧠✨ Supervisor Insight</h2>
      <div>
        {[
          "home",
          "rate",
          "map",
          "search",
          "about",
          "privacy",
          "guidelines",
        ].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{
              marginLeft: 8,
              padding: "8px 12px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background: page === p ? "#ffffff" : "rgba(255,255,255,0.2)",
              color: page === p ? COLORS.primary : "white",
              fontWeight: 500,
              boxShadow: page === p ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );

  const Container = ({ children }: any) => (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 20 }}>
      {children}
    </div>
  );

  const Card = ({ children }: any) => (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        border: "1px solid #eee",
        marginBottom: 20,
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0px)")
      }
    >
      {children}
    </div>
  );

  const Home = () => (
    <Container>
      <Card>
        <h1 style={{ color: COLORS.primary }}>
          Find & Rate Clinical Supervisors
        </h1>
        <p>
          A structured, anonymous platform supporting ethical, high-quality
          supervision.
        </p>
      </Card>
    </Container>
  );

  const Search = () => {
    const grouped: any = {};
    data.forEach((e: any) => {
      const key = e.name + e.license;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(e);
    });

    return (
      <Container>
        <h2>Supervisor Results</h2>
        {Object.keys(grouped).map((key) => {
          const entries = grouped[key];
    const avg = (field: string) => {
  const nums = entries
    .map((e: any) => Number(e.ratings[field]))
    .filter((n: number) => !isNaN(n));

  return nums.length
    ? (
        nums.reduce((a: number, b: number) => a + b, 0) /
        nums.length
      ).toFixed(1)
    : "N/A";
};
          const supportScore = (
            (Number(avg("Emotional Safety")) +
              Number(avg("Feedback")) +
              Number(avg("Guidance"))) /
            3
          ).toFixed(1);

          return (
            <Card key={key}>
              <h3>{entries[0].name}</h3>
              <p>
                <strong>Support Score:</strong> {supportScore}
              </p>
              <div
                style={{ background: COLORS.bg, borderRadius: 8, padding: 10 }}
              >
                <p>Emotional Safety: {avg("Emotional Safety")}</p>
                <p>Clinical Skill: {avg("Clinical Skill")}</p>
                <p>Feedback: {avg("Feedback")}</p>
                <p>Guidance: {avg("Guidance")}</p>
                <p>Training Quality: {avg("Training Quality")}</p>
              </div>
            </Card>
          );
        })}
      </Container>
    );
  };

  // --- Rating Component ---
  const Rating = () => {
    const [form, setForm] = useState<any>({});
    const [ratings, setRatings] = useState<any>({});

    const submit = () => {
      const entry = { ...form, ratings };
      saveData(entry);
      alert("Thank you! Your rating has been saved.");
      setForm({});
      setRatings({});
    };

    const btn = (color: string) => ({
      background: color,
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: 20,
      cursor: "pointer",
      marginTop: 20,
    });

    const ratingCategories = [
      {
        key: "Emotional Safety",
        label: "Respect and psychological safety in supervision",
      },
      {
        key: "Clinical Skill",
        label: "Supervisor’s clinical knowledge and competence",
      },
      {
        key: "Feedback",
        label: "Clarity, usefulness, and constructiveness of feedback",
      },
      {
        key: "Guidance",
        label: "Ability to provide direction and structure in clinical work",
      },
      {
        key: "Training Quality",
        label: "Quality of additional workshops or trainings offered",
      },
      {
        key: "Technology Utilization",
        label: "Use of tools like EHR, messaging, telehealth, AI",
      },
      {
        key: "Clinical Instruction",
        label: "Ability to provide clear clinical instruction",
      },
      {
        key: "Crisis Management",
        label:
          "Quality of instruction regarding safety planning and crisis response",
      },
      {
        key: "Safe Supportive Climate",
        label: "Modeling and enforcing healthy supervisory boundaries",
      },
      { key: "Compensation", label: "Fairness of pay relative to workload" },
      { key: "Benefits", label: "Quality of benefits provided" },
      {
        key: "Relationship",
        label: "Respect, communication, and overall working relationship",
      },
    ];

    return (
      <Container>
        <Card>
          <h2>Rate Your Supervisor</h2>
          <p>
            Please fill out the following form based on your direct experience.
            Ratings are anonymous.
          </p>
          <input
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            placeholder="Supervisor Name"
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            placeholder="Supervisor License #"
            value={form.license || ""}
            onChange={(e) => setForm({ ...form, license: e.target.value })}
          />
          <input
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            placeholder="Area Code"
            value={form.area || ""}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
          />
          <select
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            value={form.setting || ""}
            onChange={(e) => setForm({ ...form, setting: e.target.value })}
          >
            <option value="">Select Work Setting</option>
            <option>Group Practice</option>
            <option>Community Mental Health</option>
            <option>PHP/IOP</option>
            <option>Residential</option>
            <option>Hospital</option>
            <option>Other</option>
          </select>
          {form.setting === "Other" && (
            <input
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ddd",
                background: "white",
              }}
              placeholder="Describe setting"
              value={form.otherSetting || ""}
              onChange={(e) =>
                setForm({ ...form, otherSetting: e.target.value })
              }
            />
          )}
          <select
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            value={form.admin || ""}
            onChange={(e) => setForm({ ...form, admin: e.target.value })}
          >
            <option value="">Was supervisor also admin/owner?</option>
            <option>Yes</option>
            <option>No</option>
            <option>Unsure</option>
          </select>
          <select
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            value={form.training || ""}
            onChange={(e) => setForm({ ...form, training: e.target.value })}
          >
            <option value="">Offered additional training/workshops?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          {form.training === "Yes" && (
            <div>
              <p>
                Rate the quality of additional training on a scale of 1-5 <br />{" "}
                1- poor 5- excellent :
              </p>
              <select
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  background: "white",
                }}
                value={ratings["Training Quality"] || ""}
                onChange={(e) =>
                  setRatings({ ...ratings, "Training Quality": e.target.value })
                }
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          )}
          <strong> Instructions: </strong> Please rate your supervisor in each
          of the following areas, where 1 is the lowest/worst and 5 is the
          highest/best. Select ‘NA’ for any questions that do not apply to your
          experience.
          {ratingCategories.map((c) => (
            <div key={c.key} style={{ marginBottom: 16 }}>
              <p>
                <strong>{c.key}</strong>: {c.label}
              </p>
              <select
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  background: "white",
                }}
                value={ratings[c.key] || ""}
                onChange={(e) =>
                  setRatings({ ...ratings, [c.key]: e.target.value })
                }
              >
                <option value="">Select</option>
                <option>NA</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          ))}
          <p>Would you recommend this supervisor to a peer?</p>
          <select
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
            }}
            value={ratings.Recommend || ""}
            onChange={(e) =>
              setRatings({ ...ratings, Recommend: e.target.value })
            }
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <button onClick={submit} style={btn(COLORS.primary)}>
            Submit
          </button>
        </Card>
      </Container>
    );
  };

  const About = () => (
    <Container>
      <Card>
        <h2>About</h2>
        <p>
          This platform was created to support associate therapists in providing
          structured feedback on supervisors.
        </p>
      </Card>
    </Container>
  );

  const Privacy = () => (
    <Container>
      <Card>
        <h2>Privacy Policy</h2>
        <PrivacyContent />
      </Card>
    </Container>
  );

  const Guidelines = () => (
    <Container>
      <Card>
        <h2>Site Guidelines</h2>
        <ul>
          <li>Only rate supervisors you have directly worked with</li>
          <li>Provide accurate and fair ratings</li>
          <li>Do not include identifying client or personal information</li>
          <li>
            This is not a platform to report illegal or dangerous behavior
          </li>
          <li>All feedback is anonymized and aggregated</li>
        </ul>
        <p>Additional guideline details can be added here in the future.</p>
      </Card>
    </Container>
  );

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <Nav />
      {page === "home" && <Home />}
      {page === "rate" && <Rating />}
      {page === "search" && <Search />}
      {page === "map" && <MapPage data={data} />}
      {page === "about" && <About />}
      {page === "privacy" && <Privacy />}
      {page === "guidelines" && <Guidelines />}
    </div>
  );
}
