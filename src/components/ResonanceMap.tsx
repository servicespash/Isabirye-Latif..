/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = {
  nodes: [
    { id: 'User', group: 1 },
    { id: 'Manifesto', group: 2 },
    { id: 'Resonance', group: 2 },
    { id: 'Study', group: 3 },
    { id: 'Projects', group: 3 },
  ],
  links: [
    { source: 'User', target: 'Manifesto' },
    { source: 'User', target: 'Resonance' },
    { source: 'User', target: 'Study' },
    { source: 'Manifesto', target: 'Resonance' },
    { source: 'Study', target: 'Projects' },
  ]
};

export const ResonanceMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke', '#52525b')
      .attr('stroke-width', 1);

    const node = svg.append('g')
      .selectAll('circle')
      .data(data.nodes)
      .enter().append('circle')
      .attr('r', 8)
      .attr('fill', '#00f2fe');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });
  }, []);

  return (
    <svg ref={svgRef} width="100%" height="400" className="bg-zinc-950 rounded-lg" viewBox="0 0 600 400" />
  );
};
