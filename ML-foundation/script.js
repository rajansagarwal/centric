fetch('production.json').then(res => res.json()).then(data => {
    const Graph = ForceGraph()
    (document.getElementById('graph'))
      .graphData(data)
      .nodeAutoColorBy('group')
      .onNodeDragEnd(node => {
        node.fx = node.x;
        node.fy = node.y;
      });
  });

  const commonPropTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    graphData: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
      links: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    backgroundColor: PropTypes.string,
    nodeRelSize: PropTypes.number,
    nodeId: PropTypes.string,
    nodeLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    nodeVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
    nodeVisibility: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.func]),
    nodeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    nodeAutoColorBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onNodeHover: PropTypes.func,
    onNodeClick: PropTypes.func,
    linkSource: PropTypes.string
  };
  
