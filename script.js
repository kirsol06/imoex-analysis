const nodes = new vis.DataSet([
  { id: 1, label: "IMOEX", shape: "circle", color: "#93c5fd", font: { size: 18 } },
  { id: 2, label: "Brent", shape: "circle", color: "#bfdbfe" },
  { id: 3, label: "USD/RUB", shape: "circle", color: "#bfdbfe" },
  { id: 4, label: "S&P 500", shape: "circle", color: "#dbeafe" },
  { id: 5, label: "VIX", shape: "circle", color: "#dbeafe" },
  { id: 6, label: "IMOEX lag", shape: "circle", color: "#e5e7eb" },
  { id: 7, label: "Brent lag", shape: "circle", color: "#e5e7eb" },
  { id: 8, label: "USD/RUB lag", shape: "circle", color: "#e5e7eb" }
]);

const edges = new vis.DataSet([
  {
    from: 2,
    to: 1,
    label: "ATE = 0.065",
    title: "Нефтяной шок: положительный причинный эффект",
    color: { color: "#16a34a" },
    width: 4,
    arrows: "to",
    font: { align: "middle", size: 15 }
  },
  {
    from: 3,
    to: 1,
    label: "ATE = -0.135",
    title: "Валютный шок: отрицательный причинный эффект",
    color: { color: "#dc2626" },
    width: 5,
    arrows: "to",
    font: { align: "middle", size: 15 }
  },
  { from: 4, to: 1, title: "Влияние внешнего рынка", color: "#6b7280", width: 2, arrows: "to" },
  { from: 5, to: 1, title: "Влияние рыночного риска", color: "#6b7280", width: 2, arrows: "to" },
  { from: 4, to: 2, title: "Глобальный спрос и внешний рынок", color: "#9ca3af", width: 2, arrows: "to" },
  { from: 4, to: 3, title: "Внешний рынок и потоки капитала", color: "#9ca3af", width: 2, arrows: "to" },
  { from: 5, to: 2, title: "Неопределённость на рынках", color: "#9ca3af", width: 2, arrows: "to" },
  { from: 5, to: 3, title: "Риск и валютный курс", color: "#9ca3af", width: 2, arrows: "to" },
  { from: 6, to: 1, title: "Лаг доходности IMOEX", color: "#9ca3af", width: 1, arrows: "to" },
  { from: 7, to: 2, title: "Лаг Brent", color: "#9ca3af", width: 1, arrows: "to" },
  { from: 8, to: 3, title: "Лаг USD/RUB", color: "#9ca3af", width: 1, arrows: "to" }
]);

const container = document.getElementById("network");

const data = {
  nodes: nodes,
  edges: edges
};

const options = {
  interaction: {
    hover: true,
    tooltipDelay: 100,
    dragNodes: true,
    zoomView: true,
    dragView: true
  },

  physics: {
    enabled: true,
    barnesHut: {
      gravitationalConstant: -5500,
      centralGravity: 0.2,
      springLength: 210,
      springConstant: 0.025,
      damping: 0.25,
      avoidOverlap: 1
    }
  },

  nodes: {
    size: 28,
    borderWidth: 2,
    font: {
      size: 15,
      color: "#111827"
    }
  },

  edges: {
    smooth: {
      type: "dynamic"
    },
    font: {
      strokeWidth: 4,
      strokeColor: "#ffffff"
    }
  }
};

new vis.Network(container, data, options);