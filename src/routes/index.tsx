import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import logos from "@/assets/proteja-se-hero.png";

export const Route = createFileRoute("/")({
  component: ProtejaSe,
});

const STYLE = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --azul:    #0d1f3c;
  --azul2:   #162d52;
  --ouro:    #d4a520;
  --ouro2:   #f0d070;
  --laranja: #e05a2b;
  --verde:   #1a9e5f;
  --texto:   #e8f0f8;
  --muted:   #6a8aaa;
  --surface: #1a2d4a;
  --borda:   #253d5e;
}

html { font-size: 15px; }

body {
  background: #07111f;
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--texto);
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* ── FOLHA A4 ── */
.folha {
  width: 210mm;
  max-width: 100%;
  background: var(--azul);
  border: 1px solid var(--borda);
  padding: 10mm 11mm;
  position: relative;
}

/* ── TOPO ── */

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--ouro);
  padding-bottom: 6mm;
  margin-bottom: 5mm;
  gap: 1rem;
}

.topo-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topo-logos img {
  height: 82px;
  width: auto;
  border-radius: 6px;
  background: #fff;
  padding: 3px;
}

.topo-textos {
  display: flex;
  flex-direction: column;
}


.topo-titulo {
  font-family: 'Syne', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  letter-spacing: -0.02em;
}

.topo-titulo span { color: var(--ouro); }

.topo-sub {
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 4px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.topo-badge {
  font-size: 0.62rem;
  font-weight: 600;
  color: var(--azul);
  background: var(--ouro);
  padding: 3px 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 4px;
}

/* ── GRID PRINCIPAL ── */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4mm;
}

/* ── BLOCOS / SEÇÕES ── */
.bloco {
  background: var(--surface);
  border: 1px solid var(--borda);
  padding: 4mm;
}

.bloco.full  { grid-column: 1 / -1; }
.bloco.half  { grid-column: span 2; }
.bloco.one   { grid-column: span 1; }

.bloco-label {
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ouro);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.bloco-label::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 1.5px;
  background: var(--ouro);
}

.bloco h2 {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
  line-height: 1.2;
}

/* ── ALERTA TOPO ── */
.alerta-strip {
  background: rgba(224,90,43,0.12);
  border: 1px solid rgba(224,90,43,0.35);
  padding: 3.5mm 4.5mm;
  margin-bottom: 4mm;
  display: flex;
  gap: 10px;
  align-items: center;
}

.alerta-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.alerta-texto {
  font-size: 0.78rem;
  color: var(--texto);
  line-height: 1.5;
}

.alerta-texto strong {
  color: var(--laranja);
  font-weight: 600;
}

/* ── GOLPES LISTA ── */
.golpes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.golpe-item {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  padding: 3px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.golpe-num {
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--azul);
  background: var(--ouro);
  padding: 1px 4px;
  flex-shrink: 0;
  margin-top: 1px;
  line-height: 1.4;
}

.golpe-nome {
  font-size: 0.72rem;
  color: var(--texto);
  line-height: 1.35;
}

.vetor-label {
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 5px;
  margin-bottom: 3px;
  display: inline-block;
}

.v-emocional  { background: rgba(224,90,43,0.18); color: #f08060; border: 1px solid rgba(224,90,43,0.3); }
.v-financeiro { background: rgba(212,165,32,0.15); color: #d4a520; border: 1px solid rgba(212,165,32,0.3); }
.v-relacional { background: rgba(180,100,200,0.15); color: #c080e0; border: 1px solid rgba(180,100,200,0.3); }
.v-mensagem   { background: rgba(60,140,220,0.15); color: #70b0f0; border: 1px solid rgba(60,140,220,0.3); }

/* ── GATILHOS ── */
.gatilhos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.gatilho-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 5px;
  background: rgba(255,255,255,0.03);
  border-left: 2.5px solid var(--laranja);
}

.gatilho-emoji { font-size: 0.9rem; flex-shrink: 0; }

.gatilho-nome {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--texto);
  line-height: 1.3;
}

.gatilho-desc {
  font-size: 0.62rem;
  color: var(--muted);
  line-height: 1.3;
}

/* ── REGRAS DE OURO ── */
.regras-lista {
  display: flex;
  flex-direction: column;
  gap: 3.5px;
}

.regra-item {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding: 4px 6px;
  background: rgba(212,165,32,0.06);
  border-left: 2.5px solid var(--ouro);
}

.regra-n {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--ouro);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 1px;
}

.regra-texto {
  font-size: 0.72rem;
  color: var(--texto);
  font-weight: 500;
  line-height: 1.35;
}

.regra-detalhe {
  font-size: 0.63rem;
  color: var(--muted);
  font-weight: 400;
  display: block;
  margin-top: 1px;
}

/* ── SE CAIU NO GOLPE ── */
.passos-lista {
  display: flex;
  flex-direction: column;
  gap: 4px;
  counter-reset: passo;
}

.passo {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  counter-increment: passo;
  padding: 4px 6px;
  background: rgba(26,158,95,0.07);
  border-left: 2.5px solid var(--verde);
}

.passo-n {
  font-family: 'Syne', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--verde);
  flex-shrink: 0;
  line-height: 1.2;
}

.passo-texto {
  font-size: 0.72rem;
  color: var(--texto);
  line-height: 1.4;
}

.passo-texto strong { color: #fff; font-weight: 600; }

/* ── FRASES ARMADILHA ── */
.frases-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.frase-chip {
  font-size: 0.63rem;
  background: rgba(224,90,43,0.1);
  border: 1px solid rgba(224,90,43,0.25);
  color: #f0a080;
  padding: 2px 6px;
  line-height: 1.4;
}

.frase-chip::before { content: '"'; }
.frase-chip::after  { content: '"'; }

/* ── NUNCA FAÇA ── */
.nunca-lista {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.nunca-item {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-size: 0.7rem;
  color: var(--texto);
  padding: 3px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  line-height: 1.35;
}

.nunca-x {
  color: var(--laranja);
  font-weight: 700;
  font-size: 0.75rem;
  flex-shrink: 0;
  line-height: 1.2;
}

/* ── CONTATOS ── */
.contatos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.contato-item {
  display: flex;
  flex-direction: column;
  padding: 4px 6px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--borda);
}

.contato-org {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--ouro2);
  line-height: 1.3;
}

.contato-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

.contato-desc {
  font-size: 0.6rem;
  color: var(--muted);
  line-height: 1.3;
}

/* ── BLINDAGEM TÉCNICA ── */
.config-lista {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.config-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.7rem;
  padding: 3px 5px;
  background: rgba(255,255,255,0.03);
  line-height: 1.4;
}

.config-check {
  color: var(--verde);
  font-weight: 700;
  font-size: 0.75rem;
  flex-shrink: 0;
}

.config-texto { color: var(--texto); }
.config-texto strong { color: var(--ouro2); font-weight: 600; }

/* ── RODAPÉ ── */
.rodape {
  margin-top: 5mm;
  padding-top: 3mm;
  border-top: 1px solid var(--borda);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rodape-texto {
  font-size: 0.6rem;
  color: var(--muted);
  line-height: 1.5;
}

.rodape-fontes {
  font-size: 0.58rem;
  color: var(--muted);
  text-align: right;
  line-height: 1.5;
}

/* ── SEPARADOR ── */
.sep {
  height: 1px;
  background: var(--borda);
  margin: 2.5mm 0;
  grid-column: 1 / -1;
}

/* ── PRINT ── */
@media print {
  body { background: #fff; padding: 0; }
  .folha {
    width: 210mm;
    border: none;
    background: #fff;
    padding: 10mm 12mm;
  }
  :root {
    --azul: #fff;
    --azul2: #f0f4f8;
    --texto: #0d1f3c;
    --muted: #4a6080;
    --surface: #f0f4f8;
    --borda: #c0d0e0;
    --ouro: #8a6a00;
    --ouro2: #5a4500;
    --laranja: #c03000;
    --verde: #0a6e3c;
  }
  .topo-titulo { color: #0d1f3c; }
  .topo-titulo span { color: #8a6a00; }
  .topo-badge { background: #8a6a00; color: #fff; }
  .bloco-label::before { background: #8a6a00; }
  .frase-chip { background: #fde8e0; border-color: #c03000; color: #8a2000; }
  .regra-n { color: #8a6a00; }
  .contato-org { color: #5a4500; }
  .contato-num { color: #0d1f3c; }
  .vetor-label.v-emocional  { background: #fde8e0; color: #8a2000; }
  .vetor-label.v-financeiro { background: #fef0c0; color: #5a4000; }
  .vetor-label.v-relacional { background: #f0e0f8; color: #5a2070; }
  .vetor-label.v-mensagem   { background: #e0f0ff; color: #1a4080; }
  .alerta-strip { background: #fde8e0; border-color: #c03000; }
  .alerta-texto strong { color: #c03000; }
  .gatilho-item { background: #f8f0e0; border-left-color: #c03000; }
  .passo { background: #e0f8ec; border-left-color: #0a6e3c; }
  .passo-n { color: #0a6e3c; }
  .regra-item { background: #fef8e0; }
  .config-item { background: #f4f8ff; }
  .config-check { color: #0a6e3c; }
  .nunca-x { color: #c03000; }
  .contato-item { background: #f4f8ff; }
  h2 { color: #0d1f3c !important; }
  .bloco-label { color: #8a6a00 !important; }
  .golpe-num { background: #8a6a00; }
}

.manual-download {
  margin-top: 6mm;
  padding: 4mm;
  text-align: center;
  border-top: 1px solid var(--borda);
}
.manual-download a {
  display: inline-block;
  padding: 3mm 6mm;
  background: var(--ouro2, #c9a84c);
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s;
}
.manual-download a:hover { opacity: 0.85; }

/* ── MOBILE PREMIUM ── */
@media (max-width: 768px) {

  body {
    padding: 0;
    background: #050c18;
  }

  .folha {
    width: 100%;
    padding: 14px;
    border: none;
  }

  .topo {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .topo-left {
    width: 100%;
    justify-content: center;
  }

  .topo-logos img {
    width: min(92vw, 340px);
    height: auto;
    padding: 6px;
    border-radius: 14px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.35);
  }

  .topo-badge {
    align-self: center;
    font-size: 0.7rem;
    border-radius: 999px;
    padding: 6px 12px;
  }

  .alerta-strip {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    border-radius: 16px;
  }

  .alerta-icon {
    font-size: 2rem;
  }

  .alerta-texto {
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .bloco,
  .bloco.half,
  .bloco.one,
  .bloco.full {
    grid-column: auto !important;
    border-radius: 18px;
    padding: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 10px 30px rgba(0,0,0,0.18);
  }

  .bloco h2 {
    font-size: 1.15rem;
    margin-bottom: 10px;
  }

  .bloco-label {
    font-size: 0.68rem;
    margin-bottom: 8px;
  }

  .golpes-grid,
  .gatilhos-grid,
  .nunca-lista,
  .contatos-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .golpe-item,
  .gatilho-item,
  .nunca-item,
  .config-item,
  .passo,
  .regra-item,
  .contato-item {
    border-radius: 12px;
    padding: 10px;
    border-bottom: none;
    background: rgba(255,255,255,0.04);
  }

  .golpe-nome,
  .gatilho-nome,
  .regra-texto,
  .passo-texto,
  .config-texto,
  .nunca-item {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .gatilho-desc,
  .regra-detalhe,
  .contato-desc {
    font-size: 0.78rem;
    line-height: 1.45;
  }

  .frases-grid {
    gap: 8px;
  }

  .frase-chip {
    display: block;
    width: 100%;
    padding: 10px 12px;
    border-radius: 999px;
    text-align: center;
    font-size: 0.76rem;
  }

  .rodape {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding-bottom: 20px;
  }

  .rodape-texto,
  .rodape-fontes {
    font-size: 0.72rem;
    line-height: 1.6;
    text-align: center;
  }
}


/* ── GOLPES CLICÁVEIS ── */
.golpe-btn {
  width: 100%;
  text-align: left;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  color: var(--texto);
  padding: 5px 7px;
  font: inherit;
  font-size: 0.72rem;
  line-height: 1.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  transition: background .15s, border-color .15s;
}
.golpe-btn:hover { background: rgba(212,165,32,0.08); border-color: rgba(212,165,32,0.4); }
.golpe-btn[aria-expanded="true"] { background: rgba(212,165,32,0.12); border-color: var(--ouro); }
.golpe-chev { color: var(--ouro); font-size: 0.7rem; transition: transform .2s; }
.golpe-btn[aria-expanded="true"] .golpe-chev { transform: rotate(90deg); }
.golpe-explica {
  font-size: 0.7rem;
  color: var(--texto);
  line-height: 1.45;
  padding: 6px 8px 8px;
  background: rgba(212,165,32,0.05);
  border-left: 2.5px solid var(--ouro);
  margin: 0 0 4px;
}
.golpe-explica strong { color: var(--ouro2); font-weight: 600; }
@media (max-width: 768px) {
  .golpe-btn { font-size: 0.92rem; padding: 11px 12px; border-radius: 12px; }
  .golpe-explica { font-size: 0.88rem; padding: 10px 12px 12px; border-radius: 10px; }
}

@page { size: A4; margin: 0; }`;

const BODY_RAW = `<div class="folha">

  <!-- CABEÇALHO -->
  <div class="topo">
    <div class="topo-left">
      <div class="topo-logos">
        <img src="__LOGO_URL__" alt="Logos PMESP e PVS">
      </div>

      </div>

    <div class="topo-badge">Distribuição livre</div>
  </div>

  <!-- ALERTA INICIAL -->
  <div class="alerta-strip">
    <div class="alerta-icon">⚠️</div>
    <div class="alerta-texto">
      <strong>R$ 11,8 bilhões</strong> perdidos em fraudes no Brasil em 2025 — 47 golpes por hora, todos os dias.
      A diferença entre cair e escapar não é inteligência. É <strong>preparo</strong>.
    </div>
  </div>

  <!-- GRADE PRINCIPAL -->
  <div class="grid">

    <!-- COLUNA 1+2: GOLPES CATALOGADOS -->
    __GOLPES_SLOT__

    <!-- COLUNA 3: GATILHOS -->
    <div class="bloco one">
      <div class="bloco-label">Como o golpista te controla</div>
      <h2>6 gatilhos psicológicos</h2>
      <div class="gatilhos-grid">
        <div class="gatilho-item">
          <span class="gatilho-emoji">⚡</span>
          <div>
            <div class="gatilho-nome">Urgência</div>
            <div class="gatilho-desc">Tem que ser agora</div>
          </div>
        </div>
        <div class="gatilho-item">
          <span class="gatilho-emoji">🎖️</span>
          <div>
            <div class="gatilho-nome">Autoridade</div>
            <div class="gatilho-desc">Sou do banco / polícia</div>
          </div>
        </div>
        <div class="gatilho-item">
          <span class="gatilho-emoji">😱</span>
          <div>
            <div class="gatilho-nome">Medo</div>
            <div class="gatilho-desc">Sua conta será bloqueada</div>
          </div>
        </div>
        <div class="gatilho-item">
          <span class="gatilho-emoji">💰</span>
          <div>
            <div class="gatilho-nome">Ganância</div>
            <div class="gatilho-desc">Você foi sorteado</div>
          </div>
        </div>
        <div class="gatilho-item">
          <span class="gatilho-emoji">❤️</span>
          <div>
            <div class="gatilho-nome">Afeto</div>
            <div class="gatilho-desc">Mãe, preciso de ajuda</div>
          </div>
        </div>
        <div class="gatilho-item">
          <span class="gatilho-emoji">🤫</span>
          <div>
            <div class="gatilho-nome">Vergonha</div>
            <div class="gatilho-desc">Não conta pra ninguém</div>
          </div>
        </div>
      </div>

      <div style="margin-top: 6px; padding: 4px 6px; background: rgba(224,90,43,0.08); border-left: 2px solid var(--laranja);">
        <div style="font-size: 0.62rem; color: var(--muted); margin-bottom: 2px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Sinal universal</div>
        <div style="font-size: 0.7rem; color: var(--texto); line-height: 1.4;">Se sentiu <strong style="color:#f0a060;">urgência</strong> ou <strong style="color:#f0a060;">medo</strong> num contato não solicitado — é golpe. Desligue. Respire. Ligue de volta pelo número oficial.</div>
      </div>
    </div>

    <!-- LINHA: REGRAS + NUNCA FAÇA -->

    <!-- REGRAS DE OURO -->
    <div class="bloco half">
      <div class="bloco-label">Defesa permanente</div>
      <h2>7 Regras de Ouro</h2>
      <div class="regras-lista">
        <div class="regra-item">
          <span class="regra-n">1</span>
          <div>
            <div class="regra-texto">Urgência é o cheiro do golpe</div>
            <span class="regra-detalhe">Nenhuma decisão financeira legítima exige menos de 10 minutos.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">2</span>
          <div>
            <div class="regra-texto">Desligue e ligue de volta</div>
            <span class="regra-detalhe">Pelo número do verso do cartão ou do site oficial — nunca pelo que te passaram.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">3</span>
          <div>
            <div class="regra-texto">Palavra-código na família</div>
            <span class="regra-detalhe">Combinada com antecedência. Qualquer voz que pede dinheiro deve saber.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">4</span>
          <div>
            <div class="regra-texto">Dinheiro só sai pela fonte oficial</div>
            <span class="regra-detalhe">App do banco aberto por você. Site digitado por você. Nada mais.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">5</span>
          <div>
            <div class="regra-texto">Nunca repasse códigos ou senhas</div>
            <span class="regra-detalhe">Ninguém legítimo — banco, Receita, polícia, WhatsApp — pede isso.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">6</span>
          <div>
            <div class="regra-texto">Desconfie do bom demais</div>
            <span class="regra-detalhe">Prêmio, rendimento alto, oportunidade exclusiva = armadilha com isca.</span>
          </div>
        </div>
        <div class="regra-item">
          <span class="regra-n">7</span>
          <div>
            <div class="regra-texto">Proteja seus dados como sua casa</div>
            <span class="regra-detalhe">CPF, RG, selfie com doc e dados bancários não se enviam por WhatsApp.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- NUNCA FAÇA -->
    <div class="bloco one">
      <div class="bloco-label">Proibições absolutas</div>
      <h2>Nunca faça isso</h2>
      <div class="nunca-lista">
        <div class="nunca-item"><span class="nunca-x">✕</span>Transferir para "conta segura" indicada por estranho</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Instalar app a pedido de atendente</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Compartilhar a tela do celular</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Confirmar código de 6 dígitos que chegou por SMS</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Clicar em link recebido por WhatsApp / SMS</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Pagar para receber prêmio ou liberação de dinheiro</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Enviar comprovante antes do dinheiro aparecer no app</div>
        <div class="nunca-item"><span class="nunca-x">✕</span>Manter chamada ativa enquanto faz transação</div>
      </div>

      <div style="margin-top: 6px;">
        <div class="bloco-label" style="margin-bottom:4px;">Frases clássicas do golpista</div>
        <div class="frases-grid">
          <span class="frase-chip">Sua conta será bloqueada em 10 minutos</span>
          <span class="frase-chip">Mãe, bati o carro, manda um Pix</span>
          <span class="frase-chip">Sou do setor anti-fraude do banco</span>
          <span class="frase-chip">Não desligue, é urgente</span>
          <span class="frase-chip">Você foi sorteado</span>
          <span class="frase-chip">Não fale com ninguém por enquanto</span>
          <span class="frase-chip">Me passa o código que chegou no SMS</span>
          <span class="frase-chip">É só para confirmar sua identidade</span>
        </div>
      </div>
    </div>

    <!-- SE CAIU NO GOLPE -->
    <div class="bloco half">
      <div class="bloco-label">Se o golpe aconteceu</div>
      <h2>Aja na primeira hora</h2>
      <div class="passos-lista">
        <div class="passo">
          <span class="passo-n">1</span>
          <div class="passo-texto"><strong>Ligue para o banco imediatamente</strong> — número no verso do cartão. Peça bloqueio de todas as transações e abertura de MED (Mecanismo Especial de Devolução). Prazo legal: 7 dias úteis.</div>
        </div>
        <div class="passo">
          <span class="passo-n">2</span>
          <div class="passo-texto"><strong>Registre boletim de ocorrência</strong> — online pelo site da Delegacia Eletrônica do seu estado ou presencialmente. Guarde o número do B.O. É obrigatório para acionar o banco e o seguro.</div>
        </div>
        <div class="passo">
          <span class="passo-n">3</span>
          <div class="passo-texto"><strong>Salve todas as evidências</strong> — prints de conversas, número de quem ligou, horários, comprovantes falsos recebidos. Não apague nada antes de documentar.</div>
        </div>
        <div class="passo">
          <span class="passo-n">4</span>
          <div class="passo-texto"><strong>Troque senhas e revogue acessos</strong> — e-mail, banco, redes sociais. Ative autenticação em dois fatores em tudo. Faça isso antes de dormir.</div>
        </div>
        <div class="passo">
          <span class="passo-n">5</span>
          <div class="passo-texto"><strong>Denuncie</strong> — SaferNet (safernet.org.br), SENACON (consumidor.gov.br) e Polícia Civil. Cada denúncia ajuda a desmontar a operação criminosa.</div>
        </div>
      </div>
    </div>

    <!-- BLINDAGEM TÉCNICA + CONTATOS -->
    <div class="bloco one">
      <div class="bloco-label">Configurações essenciais</div>
      <h2>Blindagem técnica</h2>
      <div class="config-lista">
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Ative <strong>autenticação em dois fatores</strong> em banco, e-mail e WhatsApp</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Configure <strong>limite noturno do Pix</strong> (23h–6h) no seu banco</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Use <strong>gerenciador de senhas</strong> — senha diferente para cada serviço</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Ative <strong>alerta de transação</strong> por SMS e push no app do banco</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Bloqueie <strong>portabilidade de chip</strong> na operadora (anti SIM Swap)</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Jamais use <strong>Wi-Fi público</strong> para acessar banco ou e-mail</div></div>
        <div class="config-item"><span class="config-check">✓</span><div class="config-texto">Desative <strong>acesso remoto</strong> do celular quando não usar</div></div>
      </div>

      <div style="margin-top:6px;">
        <div class="bloco-label" style="margin-bottom:4px;">Contatos oficiais</div>
        <div class="contatos-grid">
          <div class="contato-item">
            <div class="contato-org">Banco Central</div>
            <div class="contato-num">0800 979 2345</div>
            <div class="contato-desc">MED, reclamações</div>
          </div>
          <div class="contato-item">
            <div class="contato-org">SENACON / Procon</div>
            <div class="contato-num">consumidor.gov.br</div>
            <div class="contato-desc">Consumidor vs banco</div>
          </div>
          <div class="contato-item">
            <div class="contato-org">SaferNet Brasil</div>
            <div class="contato-num">safernet.org.br</div>
            <div class="contato-desc">Crimes na internet</div>
          </div>
          <div class="contato-item">
            <div class="contato-org">Polícia Civil</div>
            <div class="contato-num">delegaciadigital</div>
            <div class="contato-desc">.justiça.gov.br</div>
          </div>
        </div>
      </div>
    </div>

  </div><!-- /grid -->

  <!-- RODAPÉ -->
  <div class="rodape">
    <div class="rodape-texto">
      Material de utilidade pública · Reprodução livre e incentivada<br>
      Compartilhe em grupos de família, igrejas, escolas e empresas
    </div>
    <div class="rodape-fontes">
      Fontes: Banco Central, Febraban, Fórum Brasileiro de Segurança Pública,<br>
      Polícia Federal, Anatel, SaferNet · Lei 14.155/2021 · Súmula 479 STJ
    </div>
  </div>

  <!-- DOWNLOAD MANUAL -->
  <div class="manual-download">
    <a href="__MANUAL_URL__" target="_blank" rel="noopener">
      Saiba mais — baixe o material detalhado (PDF)
    </a>
  </div>

</div><!-- /folha -->`;

type Golpe = { nome: string; explica: string };
type Vetor = { label: string; cls: string; itens: Golpe[] };

const VETORES: Vetor[] = [
  {
    label: "Vetor Emocional — pelo pânico",
    cls: "v-emocional",
    itens: [
      {
        nome: "Voz clonada por IA",
        explica:
          "Criminosos usam IA para clonar a voz de um familiar a partir de áudios públicos (redes sociais, stories). Ligam chorando pedindo Pix urgente. Defesa: tenha uma palavra-código combinada com a família e desligue para ligar de volta no número conhecido.",
      },
      {
        nome: "Falso sequestro",
        explica:
          "Ligação informando que um parente foi sequestrado, com gritos ao fundo. Exigem Pix imediato e proíbem desligar. Defesa: desligue, ligue para o parente direto. Sequestro real raramente é cobrado por Pix.",
      },
      {
        nome: "Falso parente preso",
        explica:
          "Alguém liga dizendo ser advogado ou policial e que seu parente foi preso e precisa de fiança em dinheiro agora. Defesa: peça nome completo, delegacia e ligue para a unidade oficial — nunca pelo número que ligou.",
      },
      {
        nome: "Falsa central do banco",
        explica:
          "Golpista se passa por gerente/segurança do banco, alega tentativa de fraude e pede para transferir para 'conta segura' ou instalar app. Defesa: banco nunca pede transferência. Desligue e ligue pelo número do verso do cartão.",
      },
      {
        nome: "Falso suporte técnico",
        explica:
          "Liga ou aparece pop-up dizendo que seu computador/celular está infectado. Pede para instalar AnyDesk/TeamViewer para 'ajudar'. Defesa: nenhum suporte legítimo liga sem você pedir. Não instale nada por orientação de estranho.",
      },
      {
        nome: "Golpe da falsa facção",
        explica:
          "Mensagem ameaçando você ou sua família em nome de facção criminosa, exigindo Pix para 'proteção'. Defesa: facções não cobram por WhatsApp. Não responda, não pague. Registre B.O. e bloqueie.",
      },
    ],
  },
  {
    label: "Vetor Financeiro — pelo dinheiro",
    cls: "v-financeiro",
    itens: [
      {
        nome: "Clone de WhatsApp",
        explica:
          "Criminoso clona seu WhatsApp pegando o código SMS de 6 dígitos sob pretexto (vaga de emprego, sorteio). Depois pede Pix aos seus contatos. Defesa: ative verificação em duas etapas no WhatsApp e nunca repasse códigos.",
      },
      {
        nome: "Pix errado / multiplicador",
        explica:
          "Recebe um Pix 'por engano' e pedem devolução para outra chave. Ou prometem multiplicar o valor enviado. Defesa: devolva apenas pela função 'devolver' no app, na mesma chave de origem. Multiplicação de Pix não existe.",
      },
      {
        nome: "Comprovante falso",
        explica:
          "Comprador envia comprovante de Pix editado/falso e pressiona para retirar o produto. Defesa: só entregue depois que o valor aparecer no extrato do seu app — não confie em print, PDF ou e-mail.",
      },
      {
        nome: "QR Code adulterado",
        explica:
          "QR Code legítimo é coberto por um adesivo com QR do golpista (em estacionamentos, restaurantes, maquininhas). Defesa: confira o nome do recebedor antes de confirmar o pagamento. Se não bate, cancele.",
      },
      {
        nome: "Golpes em marketplace",
        explica:
          "Anúncios com preço muito abaixo do mercado em OLX, Marketplace, Enjoei. Pedem antecipação ou link de pagamento fora da plataforma. Defesa: nunca pague fora da plataforma. Desconfie de preço bom demais.",
      },
      {
        nome: "Investimento falso / cripto",
        explica:
          "Promessas de lucro garantido em cripto, day-trade ou 'robôs'. Saque inicial funciona para ganhar confiança, depois travam o dinheiro. Defesa: rendimento garantido alto não existe. Cheque CNPJ na CVM antes de investir.",
      },
    ],
  },
  {
    label: "Vetor Relacional — pelo afeto",
    cls: "v-relacional",
    itens: [
      {
        nome: "Romance Scam",
        explica:
          "Perfil falso (militar no exterior, médico, viúvo) cria relacionamento por meses e depois pede dinheiro para emergência, viagem ou liberação de encomenda. Defesa: nunca envie dinheiro a quem não conhece pessoalmente. Faça busca reversa da foto no Google.",
      },
      {
        nome: "Golpe do emprego falso",
        explica:
          "Vaga maravilhosa por WhatsApp pedindo taxa, curso, uniforme ou seus dados completos com selfie. Defesa: empresa séria não cobra para contratar nem pede CPF + selfie antes da entrevista presencial/oficial.",
      },
      {
        nome: "Sextorsão",
        explica:
          "Após conversa íntima por vídeo, o criminoso grava e ameaça divulgar para sua lista de contatos se não pagar. Defesa: não pague — pagar não para. Bloqueie, salve evidências, registre B.O. e denuncie no SaferNet.",
      },
    ],
  },
  {
    label: "Vetor Mensagem — pelo link",
    cls: "v-mensagem",
    itens: [
      {
        nome: "Phishing / smishing",
        explica:
          "SMS ou e-mail imitando banco, Correios, Receita, com link para 'atualizar dados' ou 'rastrear encomenda'. O site copia o real e rouba senha. Defesa: nunca clique em link de mensagem. Abra o app oficial digitando o nome.",
      },
      {
        nome: "SIM Swap / eSIM Swap",
        explica:
          "Criminoso convence a operadora a transferir seu número para um chip dele, recebe seus SMS e códigos, e esvazia sua conta. Defesa: peça à operadora bloqueio de portabilidade e ative app com senha (não só SMS) para 2FA.",
      },
    ],
  },
];

function GolpesInterativos() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      {VETORES.map((v) => (
        <div key={v.label} style={{ marginBottom: 8 }}>
          <span className={`vetor-label ${v.cls}`}>{v.label}</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 4, marginTop: 4 }}>
            {v.itens.map((g) => {
              const id = `${v.cls}-${g.nome}`;
              const isOpen = open === id;
              return (
                <Fragment key={id}>
                  <button
                    type="button"
                    className="golpe-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : id)}
                  >
                    <span>{g.nome}</span>
                    <span className="golpe-chev" aria-hidden="true">
                      ›
                    </span>
                  </button>
                  {isOpen && <div className="golpe-explica">{g.explica}</div>}
                </Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function GolpesPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setHost(document.getElementById("__golpes_anchor__"));
  }, []);
  if (!host) return null;
  return createPortal(<GolpesInterativos />, host);
}

function ProtejaSe() {
  const body = BODY_RAW.replace(/__LOGO_URL__/g, logos)
    .replace("__MANUAL_URL__", `${import.meta.env.BASE_URL}manual-golpes-digitais.pdf`)
    .replace("__GOLPES_SLOT__", '<div id="__golpes_anchor__" style="display:contents"></div>');
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <GolpesPortal />
    </>
  );
}
