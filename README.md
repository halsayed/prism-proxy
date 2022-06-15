[![Contributors][contributors-shield]][contributors-url]
[![LastCommit][lastcommit-shield]][lastcommit-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#calminstallation">Automated Calm Installation</a></li>
        <li><a href="#manualinstallation">Manual Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project aims at deploying an Nginx proxy in front of Nutanix Prism Central and performing additional filtering on the API calls. 

The included config file will perform the following:
- Block all access to API endpoint /api/nutanix/v3/categories
- Block access to API endpoint /api/nutanix/v3/groups only if the body JSON contains a key "entity_type" with a value equals "cluster"

This example is helpful in filtering out some unwanted access in multi-tenancy scenarios


<!-- GETTING STARTED -->
## Getting Started

Follow the instructions below to deploy this proxy in your environment.

### Prerequisites

To test this login page, the following is required:
- Nutanix Prism Central 5.16+
- For automated installation you will need Calm 3.1+
- For the manual installation you will need a machine with docker and docker-compose


### Calm Installation

1. Download and save the Calm blueprint to your local machine.
2. Upload the blueprint .json file to your Calm and launch.

### Manual Installation
1. Clone the repo to your local machine
```shell
git clone https://github.com/halsayed/prism-proxy.git
cd prism-proxy
```
2. Edit docker-compose.yaml replacing PRISM_HOST and PRISM_PORT with the correct values for your environment. Alternatively you can create .env file with these values.
3. Save nginx certificate under the name *"ssl/nginx.cert"* and the key as *"ssl/nginx.key"*
4. run docker-compose
```shell
docker-compose up -d
```

<!-- USAGE EXAMPLES -->
## Usage

To customize the look and feel of the login page, please modify the template under *"app/templates/index.html"*

For replacing the image only, overwrite *"app/static/images/img-01.png"*



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/halsayed/prism-proxy/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Husain Ebrahim - [@husainNTNX](https://twitter.com/husainNTNX)

Project Link: [https://github.com/halsayed/prism-proxy](https://github.com/halsayed/prism-proxy)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Login Form v1 by Colorlib](https://colorlib.com/wp/template/login-form-v1/)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/halsayed/prism-proxy?style=plastic
[contributors-url]: https://github.com/halsayed/prism-proxy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/halsayed/prism-proxy?style=plastic
[forks-url]: https://github.com/halsayed/prism-proxy/network/members
[lastcommit-shield]: https://img.shields.io/github/last-commit/halsayed/prism-proxy?style=plastic
[lastcommit-url]: https://github.com/halsayed/prism-proxy/graphs/commit-activity
[stars-shield]: https://img.shields.io/github/stars/halsayed/prism-proxy?style=plastic
[stars-url]: https://github.com/halsayed/prism-proxy/stargazers
[issues-shield]: https://img.shields.io/github/issues/halsayed/prism-proxy?style=plastic
[issues-url]: https://github.com/halsayed/prism-proxy/issues
[license-shield]: https://img.shields.io/github/license/halsayed/prism-proxy?style=plastic
[license-url]: https://github.com/halsayed/prism-proxy/blob/master/LICENSE.txt
[product-screenshot]: images/prism-login.png