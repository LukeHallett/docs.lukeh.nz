---
title: Ubuntu Deployment
description: Basic commands needed to setup Ubuntu.
---
Basic commands needed to setup Ubuntu.

## System
### Expand LVM
```bash
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
```

```bash
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

## Package Installation

### Docker
Run the Docker install script they provide:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

### Plex
First, add the repository to our sources list
```bash
echo deb https://downloads.plex.tv/repo/deb public main | tee /etc/apt/sources.list.d/plexmediaserver.list
```

Then, add the signing key to ensure the packages haven't been altered
```bash
curl https://downloads.plex.tv/plex-keys/PlexSign.key | apt-key add -
```

### Google Chrome
First, setup Google's Linux signing key.
```bash
curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor | sudo tee /usr/share/keyrings/google-chrome.gpg >> /dev/null
```

Next, add the Chrome repository
```bash
echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | sudo tee /etc/apt/sources.list.d/google-chrome.list
```

Now, update the APT cache, and install the repository
```bash
sudo apt update && sudo apt install google-chrome-stable
```

## Virtualisation
### Remove Sparse Space on QEMU VM
```bash
qemu-img convert -O qcow2 source.qcow2 shrunk.qcow2
```