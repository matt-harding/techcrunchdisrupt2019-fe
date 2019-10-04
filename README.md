# Paw.graph

## Neo4j Commands

Add animal nodes

```
LOAD CSV WITH HEADERS FROM "file:///TX_graph_data.csv" AS row
MERGE (n:Animal {animal_id: row.id, name: row.name, org_id: row.org_id, type: row.type, species: row.species, age: row.age, status: row.status, publish_date: row.publish_date, status_changed_date: row.status_changed_date, shots_current: toBoolean(row.shots_current), org_name: row.org_name})
```

Add links (from backend repo)

```
node create_links.js
```

Calculate Pankrank scores

```
CALL algo.pageRank('Animal', 'LINKS',{
  iterations:20, dampingFactor:0.85, write: true, writeProperty:"pagerank", weightProperty: "weight"
})
YIELD nodes, iterations, loadMillis, computeMillis, writeMillis, dampingFactor, write, writeProperty
```

Calculate communities

```
CALL algo.labelPropagation('Animal', 'LINKS',
  {iterations: 10, writeProperty: 'community', write: true, direction: 'OUTGOING'})
YIELD nodes, iterations, loadMillis, computeMillis, writeMillis, write, writeProperty;
```




