---
title: Port Allocations
description: The in-use ports on my Docker VM.
---
The in-use ports on my Docker VM.

## docker.carbon.internal
| Service           | Stack      | Port  | Link                          |
|-------------------|------------|-------|-------------------------------|
| Arcane            | arcane     | 5000  | https://arcane.lukeh.nz       |
| Pelican           | pelican    | 5001  | https://pelican.lukeh.nz      |
| Authentik         | authentik  | 5002  | https://identity.larval.nz    |
| SmokePing         | monitoring | 5003  | https://smokeping.lukeh.nz    |
| Speedtest Tracker | monitoring | 5006  | https://speedtest.lukeh.nz    |
| InfluxDB          | monitoring | 5007  | https://influxdb.lukeh.nz     |
| Grafana           | monitoring | 5008  | http://10.10.1.4:5008         |
| qBittorrent       | arr        | 5009  | https://qbittorrent.lukeh.nz  |
| Prowlarr          | arr        | 5010  | https://prowlarr.lukeh.nz     |
| Sonarr            | arr        | 5011  | https://sonarr.lukeh.nz       |
| Radarr            | arr        | 5012  | https://radarr.lukeh.nz       |
| Lidarr            | arr        | 5013  | https://lidarr.lukeh.nz       |
| FlareSolverr      | arr        | 5014  | https://flaresolverr.lukeh.nz |
| readsb            | fr24       | 5016  | http://10.10.1.4:5016         |
| Mealie            | mealie     | 5027  | https://mealie.lukeh.nz       |
| Vert              | vert       | 5033  | https://vert.lukeh.nz         |
| TypeSense         | cartsy     | 6000  | https://search.cartsy.nz      |
| Price Scraper     | cartsy     | 6001  | http://10.10.1.4:6001         |
| qBittorrent       | arr        | 6881  |                               |
| Wings             | pelican    | 8443  |                               |
| readsb            | fr24       | 30005 |                               |
| pfclient          | fr24       | 30053 |                               |

Next ports to use: 5004, 5005, 5015
