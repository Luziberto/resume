const resume = {
    description: {
        part1: "Test PT-BR"
    },
    profile: {
        name: "Luziberto Mendes",
        title: "Desenvolvedor Full Stack Sênior",
        description: "Entrei pro mercado de trabalho de desenvolvimento em 2019, comecei atuando como estagiário como desenvolvedor front end Jr, onde tive meu primeiro contato com projetos reais, além de diversos tipos de cenários, adquiri conhecimento técnico e organizacional, primeira oportunidade para enxergar a área onde atuo até hoje. Após essa primeira temporada de aprendizado eu pude conhecer outras tecnologias e boas práticas, ter uma visão mais macro e entender o que estava sendo adotado pelo mercado. Desde então tento sempre aprender novas tecnologias, encarar novos desafios e seguindo em frente como sempre foi desde início."
    },
    contacts: {
        title: "Contatos"
    },
    education: {
        title: "Educação",
        list: {
            0: {
                course: "Ciência da Computação",
                school: "Universidade Estadual do Vale do Acaraú",
                location: "Sobral",
                date: "2014 - 2019"
            }
        }
    },
    awards: {
        title: "Prêmios"
    },
    expertise: {
        title: "Expertise"
    },
    experiences: {
        title: "Experiência Profissional",
        companies: [
            {
                period: "JAN/2023 - FEV/2024",
                role: "Software Development Engineer",
                location: "Tenessi, EUA",
                company: "Rockstar Agent",
                description: 'Realizar implementações, manutenção e integração de sistema com serviços de pagamentos e email marketing. Criação de testes, controle de CI/CD e monitoramento do servidor e seus recursos utilizando AWS EC2, S3 e ElastiCache',
                technologies: ['Laravel/php', 'Vue 3', 'Typescript', 'Gitflow', 'Phpunit']
            },
            {
                period: "FEV/2022 - AGO/2022",
                role: "Desenvolvedor Full Stack Sênior - Laravel",
                location: "São Paulo, Brasil",
                company: "Bluebenx",
                description: 'Ao decorrer fui responsável pela criação de um sistema de investimentos envolvendo alavancagens diárias, fluxos de Cash In e Cash Out, e geração de relatórios, também desenvolvi uma wallet digital contendo suporte para diversas moedas fiduciárias (Fiats) e uma exchange de ativos digitais (Crypto Ativos ou Moedas Digitais). Participei da integração de apis de pix, da migração de solução de BaaS (Banking as a service) e da implantação de boas práticas no processo de desenvolvimentos (Gitflow, Jira, CI/CD). Projetos arquitetados sempre utilizando os conceitos de SOLID para uma melhor estruturação, maleabilidade e escalabilidade do projeto, sempre obedecendo as melhores práticas adotadas pelo mercado e com cobertura total de testes. Resultando em uma entrega contínua mais ágil e consistente do produto.',
                technologies: ['Laravel/php', 'NodeJs', 'Typescript', 'Gitflow', 'Phpunit']
            },
            {
                period: "MAR/2021 - FEV/2022",
                role: "Software Development Engineer",
                location: "Utah, EUA",
                company: "DevSquad",
                description: 'Fazer parte de uma equipe capaz de desenvolver e dar suporte á sistemas baseado nos requisitos levantados pelo QA (Quality Analyst) do time de acordo com as necessidades do cliente, envolvendo realização de integrações, construção de testes unitários, adotando boas práticas clean code, utilizando de metodologias e ferramentas adotadas pela empresa.',
                technologies: ['Laravel/php', 'Livewire', 'Tailwindcss', 'AlpineJs', 'Vue 2', 'Gitflow', 'Phpunit']
            },
            {
                period: "2017 - 2023",
                role: "Desenvolvedor full stack Jr",
                location: "Ceará, Brasil",
                company: "iTransparência Sistemas",
                description: 'Desenvolver um sistema que engloba a gestão de site governamental, sessões legislativas e esquema de trâmites. E em paralelo prestar suporte técnico em um sistema de site governamental legado onde envolve um painel de controle para gerenciamento dos mesmos.',
                technologies: ['Laravel/php', 'Vue 2/Javascript']
            },
            {
                period: "OUT/2019 - MAR/2020",
                role: "Estágio desenvolvedor web front-end",
                location: "Ceará, Brasil",
                company: "Box3 - Indústria de Desenvolvimento de Software",
                description: 'Responsável pelo desenvolvimento front end de um sistema de funerária, envolvendo tarefas como consumo de apis, estilização de páginas e lógica para tratamento de informações para que possa ser exibido em tela.',
                technologies: ['Javascript', 'Jquery']
            }
        ]
    },
    footer: {
        available_in: "Disponível em"
    }
}

export default resume
