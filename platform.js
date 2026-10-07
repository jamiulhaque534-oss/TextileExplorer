document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("textile-platform-root");

  if (!root) return;

  root.innerHTML = `
    <section class="tx-platform-section">

      <h2 class="tx-platform-title">Textile Explorer Platform</h2>

      <p class="tx-platform-subtitle">
        Textile Engineering, Study, Tools, Career & Industry Resources — সব এক জায়গায়।
      </p>

      <div class="tx-platform-grid">

        <div class="tx-platform-card">
          <div class="tx-platform-icon">🧮</div>
          <h3>Textile Calculators</h3>
          <p>GSM, Yarn Count, EPI, PPI, Fabric Weight এবং আরও প্রয়োজনীয় Textile calculations.</p>
          <a href="#calculators" class="tx-platform-btn">Explore</a>
        </div>

        <div class="tx-platform-card">
          <div class="tx-platform-icon">📚</div>
          <h3>Textile Knowledge</h3>
          <p>Spinning, Weaving, Knitting, Dyeing, Finishing ও Garments সম্পর্কে জানুন।</p>
          <a href="#knowledge" class="tx-platform-btn">Explore</a>
        </div>

        <div class="tx-platform-card">
          <div class="tx-platform-icon">🎓</div>
          <h3>Student Zone</h3>
          <p>Textile students-এর জন্য notes, study resources, MCQ ও exam preparation.</p>
          <a href="#student" class="tx-platform-btn">Explore</a>
        </div>

        <div class="tx-platform-card">
          <div class="tx-platform-icon">💼</div>
          <h3>Textile Career</h3>
          <p>Textile jobs, internship, career guidance এবং skill development resources.</p>
          <a href="#career" class="tx-platform-btn">Explore</a>
        </div>

        <div class="tx-platform-card">
          <div class="tx-platform-icon">🏭</div>
          <h3>Industry Hub</h3>
          <p>Textile industry, machinery, factories, suppliers ও industry resources.</p>
          <a href="#industry" class="tx-platform-btn">Explore</a>
        </div>

        <div class="tx-platform-card">
          <div class="tx-platform-icon">🛠️</div>
          <h3>Textile Tools</h3>
          <p>Textile professionals ও students-এর দৈনন্দিন কাজের জন্য useful digital tools.</p>
          <a href="#tools" class="tx-platform-btn">Explore</a>
        </div>

      </div>

      <div class="tx-ai-box" style="margin-top:25px;">
        <h2>🤖 AI Textile Assistant</h2>
        <p>
          ভবিষ্যতে Textile Explorer-এর মধ্যে একটি Textile-focused AI Assistant
          যুক্ত করা হবে, যা Textile Engineering, calculations, processes,
          study এবং career বিষয়ে সাহায্য করবে।
        </p>
      </div>

    </section>
  `;

  console.log("Textile Explorer Platform loaded successfully.");
});
