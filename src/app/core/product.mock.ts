export const ProductMock = [
    {
        name: 'iPhone XR',
        img: './assets/compare1.png',
        colors: {
            White: '#FFF',
            Black: '#000',
            Blue: '#4e41fe',
            Coral: '#eaa499',
            Yellow: '#e8f113'
        },
        price: 'Vec od 90.000',
        screen: {
            size: '6.1',
            desc: 'Liquid Retina HD display'
        },
        body: 'Aluminium',
        kamere: [
            {
                type: 'Wide',
                desc: 'Jedna 12MP Wide camera'
            },
            {
                type: 'TrueDepth',
                desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
            }
        ],
        lock: 'Face ID 1',
        chip: {
            type: 'A12',
            desc: 'A12 Bionic cip sa prirodnim procesorom druge generacije'
        }
    },
    {
        name: 'iPhone XS',
        img: './assets/compare2.png',
        colors: {
            White: '#FFF',
            Black: '#000',
            Coral: '#eaa499'
        },
        price: 'Vec od 70.000',
        screen: {
            size: '5.8',
            desc: 'Super Retina HD display'
        },
        body: 'Glass & stainless steel',
        kamere: [
            {
                type: 'WideD',
                desc: 'Dupla 12MP Wide kao i Telephoto kamere'
            },
            {
                type: 'TrueDepth',
                desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
            }
        ],
        lock: 'Face ID 2',
        chip: {
            type: 'A12',
            desc: 'A12 Bionic cip sa prirodnim procesorom druge generacije'
        }
    },
    {
        name: 'iPhone X',
        img: './assets/compare3.png',
        colors: {
            White: '#FFF',
            Black: '#000',
            Coral: '#eaa499'
        },
        price: 'Vec od 80.000',
        screen: {
            size: '5.8',
            desc: 'Super Retina HD display'
        },
        body: 'Glass & stainless steel',
        kamere: [
            {
                type: 'WideD',
                desc: 'Dupla 12MP Wide kao i Telephoto kamere'
            },
            {
                type: 'TrueDepth',
                desc: '7MP kamera sa 1080p HD video zapisom i do 60 fps'
            }
        ],
        lock: 'Face ID 3',
        chip: {
            type: 'A11',
            desc: 'A11 Bionic cip sa prirodnim procesorom'
        }
    }
];

export const AllProductsData = {
    imacs: [
        {
            id: 1,
            name: 'iMac 21,5" Retina 4K',
            description: 'mac1 description',
            screenSize: 21,
            display: 'Retina 4K 4096 x 2304 P3 displej',
            cpu: '3,0 GHz 6-core Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8GB 2666MHz DDR4',
            storage: '1TB Fusion Drive',
            gpu: 'Radeon Pro 560X sa 4GB GDDR5',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 199900,
            img: '/assets/images/imac/imac.png',
            available: false,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,0 GHz 6-core Intel Core i5 8. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 6-core 8th-generation Intel Core i7',
                        price: 33228
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 2,
            name: 'iMac 21,5',
            description: 'mac1 description',
            screenSize: 21,
            display: '1920 x 1080 sRGB displej',
            cpu: '2,3 GHz dual-core Intel Core i5 7. generacije',
            cpuTurbo: 'Turbo Boost do 3,6 GHz',
            ram: '8 GB 2133 MHz',
            storage: '256GB SSD',
            gpu: 'Intel Iris Plus 640',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 177500,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: true,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '2,3 GHz dual-core Intel Core i5 7. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 6-core 8th-generation Intel Core i7, Turbo Boost do 4,6GHz',
                        price: 33228
                    }
                ],
                ramConfig: [
                    {
                        name: '8 GB 2133 MHz',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 3,
            name: 'iMac 21,5" Retina 4K',
            description: 'mac1 description',
            screenSize: 21,
            display: 'Retina 4K 4096 x 2304 P3 displej',
            cpu: '3,6 GHz quad-core Intel Core i3 8. generacije',
            ram: '8GB 2666MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 555X sa 2GB GDDR5',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 205100,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: false,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 4,
            name: 'iMac 21,5" Retina 4K',
            description: 'mac1 description',
            screenSize: 21,
            display: 'Retina 4K 4096 x 2304 P3 displej',
            cpu: '3,0 GHz 6-core Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8 GB 2666 MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 560X sa 4GB GDDR5',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 177500,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: true,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
        },
        {
            id: 5,
            name: 'iMac 27" Retina 5K',
            screenSize: 27,
            display: 'Retina 5K 5120 x 2880 P3 displej',
            cpu: '3,7 GHz 6-core Intel Core i5 9. generacije',
            cpuTurbo: 'Turbo Boost do 4,6 GHz',
            ram: '8 GB 2666 MHz DDR4',
            storage: '2 TB Fusion Drive',
            gpu: 'Radeon Pro 580X sa 8GB GDDR5',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 299900,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: false,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,7 GHz 6-core Intel Core i5 9. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 16-core 9th-gen Intel Core i7',
                        price: 33228
                    }
                ],
                storageConfig: [
                    {
                        name: '2 TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
                ramConfig: [
                    {
                        name: '8 GB 2666 MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 431028
                    }
                ],
                gpu: [
                    {
                        name: 'Radeon Pro 580X sa 8GB GDDR5',
                        price: 0
                    },
                    {
                        name: 'Radeon Pro Vega 20 4GB HBM2',
                        price: 60372
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 6,
            name: 'iMac 27" Retina 5K',
            screenSize: 27,
            display: 'Retina 5K 5120 x 2880 P3 displej',
            cpu: '3,1 GHz 6-core Intel Core i5 10. generacije',
            cpuTurbo: 'Turbo Boost do 4,5 GHz',
            ram: '8GB 2666MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 5300 sa 4 GB GDDR6',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 290600,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: true,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,1 GHz 6-core Intel Core i5 10. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 16-core 9th-generation Intel Core i7, Turbo Boost do 4,6GHz',
                        price: 33228
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 431028
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 7,
            name: 'iMac 27" Retina 5K',
            screenSize: 27,
            display: 'Retina 5K 5120 x 2880 P3 displej',
            cpu: '3,3 GHz 6-core Intel Core i5 10. generacije',
            cpuTurbo: 'Turbo Boost do 4,8 GHz',
            ram: '8 GB 2666 MHz DDR4',
            storage: '512 GB SSD',
            gpu: 'Radeon Pro 5300 sa 4 GB GDDR6',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 318600,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: false,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,3 GHz 6-core Intel Core i5 10. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 16-core 9th-generation Intel Core i7',
                        price: 33228
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 431028
                    }
                ],
                gpu: [
                    {
                        name: 'Radeon Pro 5300 sa 4 GB GDDR6',
                        price: 0
                    },
                    {
                        name: 'Radeon Pro Vega 20 4GB HBM2',
                        price: 60372
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        },
        {
            id: 8,
            name: 'iMac 27" Retina 5K',
            screenSize: 27,
            display: 'Retina 5K 5120 x 2880 P3 displej',
            cpu: '3,8 GHz 8-core Intel Core i7 10. generacije',
            cpuTurbo: 'Turbo Boost do 5,0 GHz',
            ram: '8 GB 2666 MHz DDR4',
            storage: '512 GB SSD',
            gpu: 'Radeon Pro 5500 XT sa 8GB GDDR6',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 358200,
            img: '/assets/images/imac/imac.png',
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg'
            ],
            available: false,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,8 GHz 8-core Intel Core i7 10. generacije',
                        price: 0
                    },
                    {
                        name: '3,2GHz 16-core 9th-generation Intel Core i7',
                        price: 33228
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 431028
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
                gpu: [
                    {
                        name: 'Radeon Pro 5500 XT sa 8GB GDDR6',
                        price: 0
                    },
                    {
                        name: 'Radeon Pro Vega 20 4GB HBM2',
                        price: 60372
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ],
                keyboardConfig: [
                    {
                        name: 'Magic Keyboard',
                        price: 0
                    },
                    {
                        name: 'Magic Keyboard with Numeric Keypad',
                        price: 7956
                    }
                ]
            }
        }
    ],
    macbookAir: [
        {
            id: 10,
            name: 'MacBook Air 13 128GB',
            screenSize: 13,
            display: 'display neki',
            cpu: '1,8 GHz dual-core Intel Core i5 5. generacije',
            cpuTurbo: 'Turbo Boost do 2,9 GHz',
            ram: '8 GB 1600 MHz LPDDR3',
            storage: '128 GB SSD',
            gpu: 'Intel Iris Plus 645 grafika',
            other: 'Dva USB ulaza , Jedan Thunderbolt 2 ulaz, Čitač SDXC kartica',
            price: 125900,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg'
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
            available: false
        },
        {
            id: 11,
            name: 'MacBook Air 256GB Space Gray',
            screenSize: 16,
            display: 'Retina True Tone displej',
            cpu: '1,1 GHz dual-core procesor Intel Core i3 10. generacije',
            cpuTurbo: 'Turbo Boost do 3,2 GHz',
            ram: '8 GB 3733 MHz LPDDR4X',
            storage: '256 GB SSD',
            gpu: 'Intel Iris Plus',
            other: 'Dva USB ulaza , Touch ID',
            price: 163300,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2_6_2.jpeg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2_6_2.jpeg'
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2_6_2.jpeg',
            available: true
        },
        {
            id: 12,
            name: 'MacBook Air 512GB Space Gray',
            screenSize: 13,
            display: 'Retina True Tone displej',
            cpu: '1,1 GHz dual-core procesor Intel Core i3 10. generacije',
            cpuTurbo: 'Turbo Boost do 3,5 GHz',
            ram: '8 GB 3733 MHz LPDDR4X',
            storage: '512 GB SSD',
            gpu: 'Intel Iris Plus',
            other: 'Dva Thunderbolt 3 ulaza , Touch ID',
            price: 163300,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2_6_2.jpeg'
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2_6_2.jpeg',
            available: true
        }
    ],
    macbookPro: [
        {
            id: 20,
            name: 'MacBook Pro 13" 128GB Space Gray',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '1,4 GHz 4-core procesor Intel Core i5',
            cpuTurbo: 'Turbo Boost do 3,9 GHz',
            ram: '8GB 2133 MHz LPDDR3',
            storage: '128 GB SSD',
            gpu: 'Intel Iris Plus 645 grafika',
            other: 'Butterfly Keyboard , Touch Bar i Touch ID, Dva Thunderbolt 3 ulaza',
            price: 159900,
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            isAvailable: false,
            available: true,
            productConfig: {
                ramConfig: [
                    {
                        name: '8GB 2133 MHz LPDDR3',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                ],
                storageConfig: [
                    {
                        name: '128 GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            },
        },
        {
            id: 21,
            name: 'MacBook Pro 13" 256GB Silver',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '1,4 GHz dual-core Intel Core i5 5. generacije',
            cpuTurbo: 'Turbo Boost do 3,9 GHz',
            ram: '8GB 2133 MHz LPDDR3',
            storage: '256GB SSD',
            gpu: 'Intel Iris Plus 645',
            other: 'Butterfly Keyboard , Touch Bar , Dva Thunderbolt 2 ulaz',
            price: 179900,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            available: true,
            productConfig: {
                ramConfig: [
                    {
                        name: '8GB 2133 MHz LPDDR3',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            }
        },
        {
            id: 22,
            name: 'MacBook Air 13 256GB Silver',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '2,4 GHz 4-core procesor Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8GB 2133 MHz LPDDR3',
            storage: '256GB SSD',
            gpu: 'Intel Iris Plus 655',
            other: 'Butterfly Keyboard , Touch Bar , Četiri Thunderbolt 3 ulaza',
            price: 204900,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            available: false,
            productConfig: {
                ramConfig: [
                    {
                        name: '8GB 2133 MHz LPDDR3',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            }
        },
        {
            id: 23,
            name: 'MacBook Air 13 512GB Space Gray',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '2,4 GHz 4-core procesor Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8 GB 2133 MHz LPDDR3',
            storage: '256GB SSD',
            gpu: 'Intel Iris Plus 655',
            other: 'Butterfly Keyboard , Touch Bar , Četiri Thunderbolt 3 ulaza',
            price: 225900,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            available: true,
            productConfig: {
                ramConfig: [
                    {
                        name: '8 GB 2133 MHz LPDDR3',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 34587
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            }
        },
        {
            id: 24,
            name: 'MacBook Pro 16" 512GB Space Gray',
            screenSize: 16,
            display: '16" True Tone Retina displej',
            cpu: '2,6 GHz 6-core procesor Intel Core i7 9. generacije',
            cpuTurbo: 'Turbo Boost do 4,5 GHz',
            ram: '16GB 2666 MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 5300M sa 4 GB GDDR6',
            other: 'Dva USB ulaza , Jedan Thunderbolt 2 ulaz, Čitač SDXC kartica',
            price: 373600,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbook_pro_16-in_touch_bar_pure_top_open_space_gray_wwen_screen-1_1_1_2_1_1.jpg',
            available: false,
            productConfig: {
                ramConfig: [
                    {
                        name: '16GB 2666 MHz DDR4',
                        price: 0
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 1986608
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            }
        },
        {
            id: 25,
            name: 'MacBook Pro 16"  Silver',
            screenSize: 16,
            display: '16" True Tone Retina displej',
            cpu: '2,3 GHz 8-core procesor Intel Core i9 9. generacije',
            cpuTurbo: 'Turbo Boost do 4,8 GHz',
            ram: '16GB 2666 MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 5500M sa 4 GB GDDR6',
            other: 'Dva USB ulaza , Jedan Thunderbolt 2 ulaz, Čitač SDXC kartica',
            price: 442500,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbook_pro_16-in_touch_bar_pure_top_open_silver_wwen_screen-1_8_4.jpg',
            images: [
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
            ],
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbook_pro_16-in_touch_bar_pure_top_open_silver_wwen_screen-1_8_4.jpg',
            available: true,
            productConfig: {
                ramConfig: [
                    {
                        name: '16GB 2666 MHz DDR4',
                        price: 0
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100646
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 166608
                    },
                    {
                        name: '128GB 2666MHz DDR4',
                        price: 1986608
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB Fusion Drive',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33228
                    },
                    {
                        name: '1TB SSD',
                        price: 64788
                    }
                ],
            }
        }
    ],
    iphones: [
        {
            id: 31,
            name: 'iPhone Xʀ',
            storage: '64GB',
            price: 79700,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone-xr-red-front_1_2_1.png',
            productConfig: {
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '128GB',
                        price: 6700
                    }
                ],
                colorConfig: [
                    {
                        colorName: '(PRODUCT)RED',
                        value: '#981411'
                    },
                    {
                        colorName: 'White',
                        value: '#fff'
                    },
                    {
                        colorName: 'Black',
                        value: '#000'
                    },
                    {
                        colorName: 'Yellow',
                        value: '#F9CE45'
                    },
                    {
                        colorName: 'Coral',
                        value: '#FF6E5B'
                    },
                    {
                        colorName: 'Blue',
                        value: '#47AFE6'
                    }
                ]
            },
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone-xr-red-front_1_2_1.png',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone-xr-red-back_1_2_1.png'
            ]
        },
        {
            id: 32,
            name: 'iPhone Xs',
            storage: '512GB',
            price: 79700,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/img-_0001s_0001_iphone-xs-max-silver-select-2018_av2_5.jpg',
            productConfig: {
                storageConfig: [
                    {
                        name: '512GB',
                        price: 0
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    }
                ]
            },
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/img-_0001s_0001_iphone-xs-max-silver-select-2018_av2_5.jpg'
            ]
        },
        {
            id: 33,
            name: 'iPhone 11',
            storage: '64GB',
            price: 93400,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_11_red_1_1_1.jpg',
            productConfig: {
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '128GB',
                        price: 16700
                    },
                    {
                        name: '256GB',
                        price: 23600
                    }
                ],
                colorConfig: [
                    {
                        colorName: '(PRODUCT)RED',
                        value: '#981411'
                    },
                    {
                        colorName: 'White',
                        value: '#fff'
                    },
                    {
                        colorName: 'Black',
                        value: '#000'
                    },
                    {
                        colorName: 'Yellow',
                        value: '#F9CE45'
                    },
                    {
                        colorName: 'Coral',
                        value: '#FF6E5B'
                    },
                    {
                        colorName: 'Blue',
                        value: '#47AFE6'
                    }
                ]
            },
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_11_red_1_1_1.jpg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_11_red_2_5.jpg'
            ]
        },
        {
            id: 34,
            name: 'iPhone 11 Pro',
            storage: '64GB',
            price: 144300,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_11_pro_gold_4.jpg',
            productConfig: {
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '256GB',
                        price: 22600
                    },
                    {
                        name: '512GB',
                        price: 45600
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    },
                    {
                        colorName: 'Gold',
                        value: '#dec9af'
                    },
                    {
                        colorName: 'Midnight Green',
                        value: '#6d7a70'
                    }
                ]
            },
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_11_pro_gold_4.jpg'
            ]
        }
    ],
    ipads: [
        {
            id: 41,
            name: 'iPad mini (2019)',
            screenSize: 7.9,
            display: '7,9-inčni ekran rezolucije 2048*1536 piksela pri 326 ppi\n',
            cpu: 'A12X Bionic chip with 64-bit architecture',
            storage: '64GB',
            price: 69900,
            images: [
                'https://www.icentar.me/wp-content/uploads/2019/03/ipadmini2019c-gold-1-600x600.jpg',
            ],
            detailImg: 'https://www.icentar.me/wp-content/uploads/2019/03/ipadmini2019c-gold-1-600x600.jpg',
            img: 'https://www.icentar.me/wp-content/uploads/2019/05/m2-ipad-mini-2019.png',
            isAvailable: true,
            available: true,
            productConfig: {
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '128GB',
                        price: 6700
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    },
                    {
                        colorName: 'Gold',
                        value: '#dec9af'
                    }
                ],
                networkConfig: [
                    {
                        name: 'Wi-Fi',
                        price: 0
                    },
                    {
                        name: 'Wi-Fi + Cellular',
                        price: 18400
                    }
                ]
            },
        },
        {
            id: 42,
            name: 'iPad (2020)',
            screenSize: 10.2,
            display: '10,2-inčni ekran rezolucije 2160*1620 piksela pri 264 ppi',
            cpu: 'A12 Bionic čip sa 64-bitnom arhitekturom Neural Engine',
            storage: '32GB',
            price: 86900,
            images: [
                'https://www.icentar.me/wp-content/uploads/2020/10/ipad-2020-gold-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/10/ipad-2020-gold-01-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/10/ipad-2020-gold-02-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/10/ipad-2020-gold-03-600x600.jpg',
            ],
            detailImg: 'https://www.icentar.me/wp-content/uploads/2020/10/ipad-2020-gold-600x600.jpg',
            img: 'https://www.icentar.me/wp-content/uploads/2020/10/m4-ipad2020.png',
            isAvailable: true,
            available: true,
            productConfig: {
                storageConfig: [
                    {
                        name: '32GB',
                        price: 0
                    },
                    {
                        name: '128GB',
                        price: 9700
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    },
                    {
                        colorName: 'Gold',
                        value: '#dec9af'
                    }
                ],
                networkConfig: [
                    {
                        name: 'Wi-Fi',
                        price: 0
                    },
                    {
                        name: 'Wi-Fi + Cellular',
                        price: 18400
                    }
                ]
            },
        },
        {
            id: 43,
            name: 'iPad Air (2019)',
            screenSize: 10.5,
            display: '10,2-inčni ekran rezolucije 2160*1620 piksela pri 264 ppi',
            cpu: 'A12 Bionic čip sa 64-bitnom arhitekturom Neural Engine',
            storage: '64GB',
            price: 109900,
            images: [
                'https://www.icentar.me/wp-content/uploads/2019/04/ipadair2019c-gold-1-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2019/04/ipadair2019c-gold-2-600x600.jpg',
            ],
            detailImg: 'https://www.icentar.me/wp-content/uploads/2019/04/ipadair2019c-gold-1-600x600.jpg',
            img: 'https://www.icentar.me/wp-content/uploads/2019/05/m2-ipad-air-2019.png',
            isAvailable: true,
            available: true,
            productConfig: {
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '256GB',
                        price: 11400
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    },
                    {
                        colorName: 'Gold',
                        value: '#dec9af'
                    }
                ],
                networkConfig: [
                    {
                        name: 'Wi-Fi',
                        price: 0
                    },
                    {
                        name: 'Wi-Fi + Cellular',
                        price: 18400
                    }
                ]
            },
        },
        {
            id: 44,
            name: 'iPad Pro (2018)',
            screenSize: 11,
            display: '11-inčni ekran rezolucije 2388×1668 piksela pri 264 ppi',
            cpu: 'A12X Bionic chip with 64-bit architecture',
            storage: '64GB',
            price: 129900,
            images: [
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-2-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-3-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-4-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-5-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-6-600x600.jpg',
            ],
            detailImg: 'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
            img: 'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
            isAvailable: true,
            available: true,
            productConfig: {
                screenSizeConfig: [
                    {
                        name: '11"',
                        price: 0,
                        display: '11-inčni ekran rezolucije 2388×1668 piksela pri 264 ppi'
                    },
                    {
                        name: '12.9"',
                        price: 13670,
                        display: '12,9-inčni ekran rezolucije 2732×2048 piksela pri 264 ppi'
                    }
                ],
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '256GB',
                        price: 11400
                    },
                    {
                        name: '512GB',
                        price: 41400
                    },
                    {
                        name: '1TB',
                        price: 81400
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    }
                ],
                networkConfig: [
                    {
                        name: 'Wi-Fi',
                        price: 0
                    },
                    {
                        name: 'Wi-Fi + Cellular',
                        price: 22400
                    }
                ]
            }
        },
        {
            id: 45,
            name: 'iPad Pro (2020)',
            screenSize: 11,
            display: '11-inčni ekran rezolucije 2388×1668 piksela pri 264 ppi',
            cpu: 'A12X Bionic chip with 64-bit architecture',
            storage: '64GB',
            price: 145900,
            images: [
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-2-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-3-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-4-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-5-600x600.jpg',
                'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-129-2020-spaceg-6-600x600.jpg',
            ],
            detailImg: 'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
            img: 'https://www.icentar.me/wp-content/uploads/2020/03/ipadpro-11-2020-spaceg-1-600x600.jpg',
            isAvailable: true,
            available: true,
            productConfig: {
                screenSizeConfig: [
                    {
                        name: '11"',
                        price: 0,
                        display: '11-inčni ekran rezolucije 2388×1668 piksela pri 264 ppi'
                    },
                    {
                        name: '12.9"',
                        price: 13670,
                        display: '12,9-inčni ekran rezolucije 2732×2048 piksela pri 264 ppi'
                    }
                ],
                storageConfig: [
                    {
                        name: '64GB',
                        price: 0
                    },
                    {
                        name: '256GB',
                        price: 13400
                    },
                    {
                        name: '512GB',
                        price: 46400
                    },
                    {
                        name: '1TB',
                        price: 91400
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Space Gray',
                        value: '#a2a6aa'
                    },
                    {
                        colorName: 'Silver',
                        value: '#D8DBDA'
                    }
                ],
                networkConfig: [
                    {
                        name: 'Wi-Fi',
                        price: 0
                    },
                    {
                        name: 'Wi-Fi + Cellular',
                        price: 21900
                    }
                ]
            }
        }
    ],
    iwatch: [
        {
            id: 51,
            name: 'Apple Watch Series SE',
            screenSize: 1.78,
            display: '40mm (gps + cellular)',
            os: 'watchOS 7.0',
            cpu: 'Dual-core',
            storage: '32GB',
            ram: '1GB',
            price: 88900,
            images: [
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYW62_VW_34FR+watch-44-alum-gold-cell-se_VW_34FR_WF_CO_GEO_US?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599072412000,1602199058000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYTK2_VW_34FR+watch-44-alum-gold-cell-se_VW_34FR_WF_CO_GEO_US?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599071329000,1602199058000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYWT2_VW_34FR+watch-44-alum-gold-cell-se_VW_34FR_WF_CO_GEO_US?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599073157000,1602199058000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYTV2_VW_34FR+watch-44-alum-gold-cell-se_VW_34FR_WF_CO_GEO_US?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599071862000,1602199058000'
            ],
            detailImg: './assets/images/iwatch-menu/watch-series-se.jpg',
            img: './assets/images/iwatch-menu/watch-series-se.jpg',
            isAvailable: true,
            available: true,
            productConfig: {
                screenSizeConfig: [
                    {
                        name: '40mm (gps + cellular)',
                        price: 0,
                        screenSize: 1.57
                    },
                    {
                        name: '40mm (gps)',
                        price: 13670,
                        screenSize: 1.57
                    },
                    {
                        name: '44mm (gps + cellular)',
                        price: 13670,
                        screenSize: 1.78
                    },
                    {
                        name: '44mm (gps)',
                        price: 13670,
                        screenSize: 1.78
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Deep Navy',
                        value: '#33384B'
                    },
                    {
                        colorName: 'Ginger',
                        value: '#EBCE68'
                    },
                    {
                        colorName: 'Cyprus Green',
                        value: '#373F32'
                    },
                    {
                        colorName: 'Pink Citrus',
                        value: '#EB6258'
                    },
                    {
                        colorName: 'White',
                        value: '#FBF7F4'
                    },
                    {
                        colorName: 'Black',
                        value: '#313131'
                    },
                    {
                        colorName: '(PRODUCT RED)',
                        value: '#D74248'
                    }
                ]
            }
        },
        {
            id: 52,
            name: 'Apple Watch Series 6',
            screenSize: 1.78,
            display: '40mm (gps + cellular)',
            os: 'watchOS 7.0',
            cpu: 'Dual-core',
            storage: '32GB',
            ram: '1GB',
            price: 34900,
            images: [
                './assets/images/iwatch-menu/watch-series-6.jpg',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAU2_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599010468000,1599523448000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MGQR3_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599010407000,1599523448000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MG423_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599010412000,1599523448000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MG423_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599010412000,1599523448000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTP72_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1566449884261,1599523448000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTP62_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1566449863965,1599523448000'
            ],
            detailImg: './assets/images/iwatch-menu/watch-series-6.jpg',
            img: './assets/images/iwatch-menu/watch-series-6.jpg',
            isAvailable: true,
            available: true,
            productConfig: {
                screenSizeConfig: [
                    {
                        name: '40mm (gps + cellular)',
                        price: 0,
                        screenSize: 1.57
                    },
                    {
                        name: '44mm (gps + cellular)',
                        price: 13670,
                        screenSize: 1.78
                    }
                ],
                colorConfig: [
                    {
                        colorName: 'Deep Navy',
                        value: '#33384B'
                    },
                    {
                        colorName: 'Ginger',
                        value: '#EBCE68'
                    },
                    {
                        colorName: 'Cyprus Green',
                        value: '#373F32'
                    },
                    {
                        colorName: 'Pink Citrus',
                        value: '#EB6258'
                    },
                    {
                        colorName: 'Pink Sand',
                        value: '#F2D7CE'
                    },
                    {
                        colorName: 'White',
                        value: '#FBF7F4'
                    },
                    {
                        colorName: 'Black',
                        value: '#313131'
                    },
                    {
                        colorName: '(PRODUCT RED)',
                        value: '#D74248'
                    }
                ]
            }
        }
    ],
    macPro: [
        {
            id: 60,
            name: 'Mac Pro',
            cpu: '3,6GHz 8-core Intel Xeon W',
            cpuTurbo: 'Turbo Boost do 4,0GHz',
            ram: '32GB (4x8GB) DDR4 EEC',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 580X sa 8GB GDDR5 memorije',
            // other: 'Kućište od nerđajućeg čelika sa nožicama',
            holder: 'Kućište od nerđajućeg čelika sa nožicama',
            price: 861800,
            img: 'https://istyle.cz/media/wysiwyg/CZ/content/preselection/mac-pro/mac-pro-3.jpg',
            available: true,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery2_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery3_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery4_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery5_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery6_3.jpeg',
                '',
            ],
            detailImg: 'https://istyle.rs/media/wysiwyg/CZ/categories/mac/m2-mac-pro.jpg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,6GHz 8-core Intel Xeon W',
                        price: 0
                    },
                    {
                        name: '3,3GHz 12-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 159665
                    },
                    {
                        name: '3,2GHz 16-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 319486
                    },
                    {
                        name: '2,7GHz 24-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 958300
                    },
                    {
                        name: '2,5GHz 28-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 1117962
                    }
                ],
                ramConfig: [
                    {
                        name: '32GB (4x8GB) DDR4 EEC',
                        price: 0
                    },
                    {
                        name: '48GB (6x8GB) DDR4 ECC',
                        price: 47932
                    },
                    {
                        name: '96GB (6x16GB) DDR4 ECC',
                        price: 159665
                    },
                    {
                        name: '192GB (6x32GB) DDR4 ECC',
                        price: 479149
                    },
                    {
                        name: '384GB (6x64GB) DDR4 ECC',
                        price: 958300
                    },
                    {
                        name: '768GB (12x64GB) DDR4 ECC',
                        price: 1597112
                    },
                    {
                        name: '768GB (6x128GB) DDR4 ECC',
                        price: 2235925
                    },
                    {
                        name: '1,5TB (12x128GB) DDR4 ECC (zahteva procesor od 24 ili 28 jezgara)',
                        price: 5110664
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB SSD',
                        price: 63960
                    },
                    {
                        name: '2TB SSD',
                        price: 127764
                    },
                    {
                        name: '4TB SSD',
                        price: 223625
                    }
                ],
                gpu: [
                    {
                        name: 'Radeon Pro 580X sa 8GB GDDR5 memorije',
                        price: 0
                    },
                    {
                        name: 'Radeon Pro Vega II 32GB HBM2',
                        price: 383287
                    },
                    {
                        name: '2x Radeon Pro Vega II sa 32GB HBM2 memorije svaka',
                        price: 830537
                    },
                    {
                        name: 'Radeon Pro Vega II Duo sa 2x32GB HBM2 memorije',
                        price: 830537
                    },
                    {
                        name: '2x Radeon Pro Vega II Duo sa 2x32GB HBM2 memorije svaka',
                        price: 1724875
                    }
                ],
                AfterburnerConfig: [
                    {
                        name: 'Ne, hvala.',
                        price: 0
                    },
                    {
                        name: 'Apple Afterburner',
                        price: 319486
                    }
                ],
                holderConfig: [
                    {
                        name: 'Kućište od nerđajućeg čelika sa nožicama',
                        price: 0
                    },
                    {
                        name: 'Kućište od nerđajućeg čelika sa točkićima',
                        price: 63960
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ]
            }
        },
        {
            id: 61,
            name: 'Mac Pro Rack',
            cpu: '3,5GHz 8-core Intel Xeon W',
            cpuTurbo: 'Turbo Boost do 4,0GHz',
            ram: '32GB (4x8GB) DDR4 ECC',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 580X sa 8GB GDDR5 memorije',
            // other: 'Kućište od nerđajućeg čelika sa nožicama',
            holder: 'Kućište od nerđajućeg čelika sa nožicama',
            price: 861800,
            img: 'https://istyleprod.s3.amazonaws.com/RO/newdesign/mac-pro-4.jpg',
            available: true,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery1_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery2_5.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery3_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery4_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery5_3.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/mac-pro-2019-gallery6_3.jpeg'
            ],
            detailImg: 'https://istyle.rs/media/wysiwyg/CZ/categories/mac/m2-mac-pro.jpg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,5GHz 8-core Intel Xeon W',
                        price: 0
                    },
                    {
                        name: '3,3GHz 12-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 159665
                    },
                    {
                        name: '3,2GHz 16-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 319486
                    },
                    {
                        name: '2,7GHz 24-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 958300
                    },
                    {
                        name: '2,5GHz 28-core Intel Xeon W, Turbo Boost do 4,4GHz',
                        price: 1117962
                    }
                ],
                ramConfig: [
                    {
                        name: '32GB (4x8GB) DDR4 ECC',
                        price: 0
                    },
                    {
                        name: '48GB (6x8GB) DDR4 ECC',
                        price: 47932
                    },
                    {
                        name: '96GB (6x16GB) DDR4 ECC',
                        price: 159665
                    },
                    {
                        name: '192GB (6x32GB) DDR4 ECC',
                        price: 479149
                    },
                    {
                        name: '384GB (6x64GB) DDR4 ECC',
                        price: 958300
                    },
                    {
                        name: '768GB (12x64GB) DDR4 ECC',
                        price: 1597112
                    },
                    {
                        name: '768GB (6x128GB) DDR4 ECC',
                        price: 2235925
                    },
                    {
                        name: '1,5TB (12x128GB) DDR4 ECC (zahteva procesor od 24 ili 28 jezgara)',
                        price: 5110664
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB SSD',
                        price: 63960
                    },
                    {
                        name: '2TB SSD',
                        price: 127764
                    },
                    {
                        name: '4TB SSD',
                        price: 223625
                    }
                ],
                gpu: [
                    {
                        name: 'Radeon Pro 580X sa 8GB GDDR5 memorije',
                        price: 0
                    },
                    {
                        name: 'Radeon Pro Vega II 32GB HBM2',
                        price: 383287
                    },
                    {
                        name: '2x Radeon Pro Vega II sa 32GB HBM2 memorije svaka',
                        price: 830537
                    },
                    {
                        name: 'Radeon Pro Vega II Duo sa 2x32GB HBM2 memorije',
                        price: 830537
                    },
                    {
                        name: '2x Radeon Pro Vega II Duo sa 2x32GB HBM2 memorije svaka',
                        price: 1724875
                    }
                ],
                AfterburnerConfig: [
                    {
                        name: 'Ne, hvala.',
                        price: 0
                    },
                    {
                        name: 'Apple Afterburner',
                        price: 319486
                    }
                ],
                holderConfig: [
                    {
                        name: 'Kućište od nerđajućeg čelika sa nožicama',
                        price: 0
                    },
                    {
                        name: 'Kućište od nerđajućeg čelika sa točkićima',
                        price: 63960
                    }
                ],
                mouseConfig: [
                    {
                        name: 'Magic Mouse 2',
                        price: 0
                    },
                    {
                        name: 'Magic Trackpad 2',
                        price: 9620
                    },
                    {
                        name: 'Magic Mouse 2 + Magic Trackpad 2',
                        price: 21587
                    }
                ]
            }
        },
        {
            id: 62,
            name: 'Pro Display XDR',
            screenSize: 32,
            display: '6K Retina 6016×3384 32" IPS LCD',
            price: 861800,
            img: 'https://istyle.cz/media/wysiwyg/CZ/content/preselection/mac-pro/mac-pro-display.jpg',
            available: true,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/pro-display-hero_fv1_4_2.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/pro-display-gallery1-201909_4_2.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/pro-display-gallery2-201909_4_2.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/pro-display-gallery3-201909_4_2.jpeg',
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/pro-display-gallery4-201909_4_2.jpeg'
            ],
            detailImg: 'https://istyle.rs/media/wysiwyg/CZ/categories/mac/m2-mac-pro.jpg'
        }
    ],
    macMini: [
        {
            id: 71,
            name: 'Mac mini 256GB',
            cpu: '3,6GHz quad-core 8th-generation Intel Core i3 procesor',
            // cpuTurbo: 'Turbo Boost do 4,0GHz',
            ram: '8GB 2666MHz DDR4',
            storage: '256GB SSD',
            other: 'Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet sa RJ-45 konektorom)',
            price: 126100,
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg',
            available: true,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg'
            ],
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,6GHz quad-core 8th-generation Intel Core i3 procesor',
                        price: 0
                    },
                    {
                        name: '3,2GHz 6-core 8th-generation Intel Core i7 procesor',
                        price: 48402
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 47932
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100768
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 167834
                    }
                ],
                storageConfig: [
                    {
                        name: '256GB SSD',
                        price: 0
                    },
                    {
                        name: '512GB SSD',
                        price: 33534
                    },
                    {
                        name: '1TB SSD',
                        price: 67234
                    },
                    {
                        name: '2TB SSD',
                        price: 134302
                    }
                ],
                ethernetConfig: [
                    {
                        name: 'Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet sa RJ-45 konektorom)',
                        price: 0
                    },
                    {
                        name: '10 Gigabit Ethernet (Nbase-T Ethernet sa podrškom za 1Gb, 2.5Gb, 5Gb i 10Gb Ethernet sa RJ-45 konektorom)',
                        price: 16850
                    }
                ]
            }
        },
        {
            id: 72,
            name: 'Mac mini 512GB',
            cpu: '3,0GHz 6-core 8th-generation Intel Core i5',
            cpuTurbo: 'Turbo Boost do 4,1GHz',
            ram: '8GB 2666MHz DDR4',
            storage: '512GB SSD',
            other: 'Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet sa RJ-45 konektorom)',
            price: 172685,
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg',
            available: true,
            isNew: true,
            images: [
                'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg'
            ],
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macmini-pf-spgry-screen_3_2_1_2.jpg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,0GHz 6-core 8th-generation Intel Core i5',
                        price: 0
                    },
                    {
                        name: '3,2GHz 6-core 8th-generation Intel Core i7',
                        price: 48402
                    }
                ],
                ramConfig: [
                    {
                        name: '8GB 2666MHz DDR4',
                        price: 0
                    },
                    {
                        name: '16GB 2666MHz DDR4',
                        price: 47932
                    },
                    {
                        name: '32GB 2666MHz DDR4',
                        price: 100768
                    },
                    {
                        name: '64GB 2666MHz DDR4',
                        price: 167834
                    }
                ],
                storageConfig: [
                    {
                        name: '512GB SSD',
                        price: 0
                    },
                    {
                        name: '1TB SSD',
                        price: 33641
                    },
                    {
                        name: '2TB SSD',
                        price: 100765
                    }
                ],
                ethernetConfig: [
                    {
                        name: 'Gigabit Ethernet (10/100/1000BASE-T Gigabit Ethernet sa RJ-45 konektorom)',
                        price: 0
                    },
                    {
                        name: '10 Gigabit Ethernet (Nbase-T Ethernet sa podrškom za 1Gb, 2.5Gb, 5Gb i 10Gb Ethernet sa RJ-45 konektorom)',
                        price: 16850
                    }
                ]
            }
        }
    ],
    iMusic: [
        {
            id: 81,
            name: 'Airpods',
            cpu: '',
            cpuTurbo: '',
            ram: '',
            storage: '',
            gpu: '',
            // other: 'Kućište od nerđajućeg čelika sa nožicama',
            price: 27400,
            img: '/assets/images/iMusic-menu/airpods-pro.png',
            available: true,
            isNew: true,
            images: [
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634652000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634643000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634662000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634724000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634793000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000',
                '/assets/images/iMusic-menu/airpods-pro.png'
            ],
            detailImg: '/assets/images/iMusic-menu/airpods-pro.png',
            iMusicSpecs: {
                audioTechnology: [
                    'Active Noise Cancellation',
                    'Transparency mode',
                    'Adaptive EQ',
                    'Vent system for pressure equalization',
                    'Custom high-excursion Apple driver',
                    'Custom high dynamic range amplifier'
                ],
                sensors: [
                    'Dual beamforming microphones',
                    'Inward-facing microphone',
                    'Dual optical sensors',
                    'Motion-detecting accelerometer',
                    'Speech-detecting accelerometer',
                    'Force sensor'
                ],
                controls: [
                    'Press the force sensor once to play, pause, or answer a phone call',
                    'Press twice to skip forward',
                    'Press three times to skip back',
                    'Press and hold to switch between Active Noise Cancellation and Transparency mode',
                    'Say “Hey Siri” to do things like play a song, make a call, or get directions'
                ]
            }
        },
        {
            id: 82,
            name: 'Airpods Pro',
            cpu: '',
            cpuTurbo: '',
            ram: '',
            storage: '',
            gpu: '',
            // other: 'Kućište od nerđajućeg čelika sa nožicama',
            price: 27400,
            img: '/assets/images/iMusic-menu/airpods-pro.png',
            available: true,
            isNew: true,
            images: [
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634652000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634643000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634662000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634724000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634793000',
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000',
                '/assets/images/iMusic-menu/airpods-pro.png'
            ],
            detailImg: '/assets/images/iMusic-menu/airpods-pro.png',
            iMusicSpecs: {
                audioTechnology: [
                    'Active Noise Cancellation',
                    'Transparency mode',
                    'Adaptive EQ',
                    'Vent system for pressure equalization',
                    'Custom high-excursion Apple driver',
                    'Custom high dynamic range amplifier'
                ],
                sensors: [
                    'Dual beamforming microphones',
                    'Inward-facing microphone',
                    'Dual optical sensors',
                    'Motion-detecting accelerometer',
                    'Speech-detecting accelerometer',
                    'Force sensor'
                ],
                controls: [
                    'Press the force sensor once to play, pause, or answer a phone call',
                    'Press twice to skip forward',
                    'Press three times to skip back',
                    'Press and hold to switch between Active Noise Cancellation and Transparency mode',
                    'Say “Hey Siri” to do things like play a song, make a call, or get directions'
                ]
            }
        }
    ]
};

export const AccessorizesData = {
    mac: [
        {
            name: 'Tucano Nido Hard Shell case for MacBook Air 13"',
            img: 'https://istyle.rs/pub/media/catalog/product/cache/image/400x400/beff4985b56e3afdbeabfc89641a4582/h/s/hsni-mba13_b_3.jpg',
            price: 5690
        },
        {
            name: 'Apple USB-C to USB Adapter',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/j/mj1m2zm.jpg',
            price: 4490
        },
        {
            name: 'Apple USB SuperDrive',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/d/md564zma-99_big.jpg',
            price: 14300
        },
        {
            name: 'Moshi Mini DisplayPort to HDMI Adapter Pro',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/5/5/5566.jpeg',
            price: 5000
        },
        {
            name: 'Apple Magic Mouse 2',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/o/mouse_8_1.jpg',
            price: 12400
        },
        {
            name: 'iSTYLE TYPE-C PRO HUB',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/s/istyle_type-c_hub_pro-space-2.jpg',
            price: 12000
        }
    ],
    iphone: [
        {
            name: 'Apple Lightning to micro USB Adapter',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/d/md820.jpeg',
            price: 3690
        },
        {
            name: 'Apple Lightning to SD Card Camera Reader',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/j/mjyt2.jpeg',
            price: 5290
        },
        {
            name: 'iSTYLE Premium Lightning Cable',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/s/istyle_premium_cable_1_5m_-_dark_grey_2.jpg',
            price: 4800
        },
        {
            name: 'Next One 3D Glass Screen Protector za iPhone 11 Pro',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/f/o/folie_3d_iphone11pro.jpg',
            price: 3500
        },
        {
            name: 'Apple Smart Battery Case za iPhone 11 Pro',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/w/mwvm2_av6_geo_us.jpeg',
            price: 23900
        },
        {
            name: 'Apple 20W USB-C Power Adapter',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/u/mu7v2_geo_emea_1.jpg',
            price: 4100
        }
    ],
    ipad: [
        {
            name: 'Apple Pencil (2nd Generation)',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple-pencil-2018_1.jpg',
            price: 21800
        },
        {
            name: 'Apple Smart Keyboard Folio za iPad Pro (2018)',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/u/mu8h2ll_av2.jpeg',
            price: 34900
        },
        {
            name: 'Apple Smart Cover za iPad mini',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/v/mvqf2_av1_silver.jpg',
            price: 7200
        },
        {
            name: 'iSTYLE WIRELESS PD 18W POWER BANK 10000 mAh - 10W/7,5W/5W + PD 18W',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/s/istyle_wireless_pd_18w_powerbank-2.jpg',
            price: 6600
        },
        {
            name: 'Next One Tempered Glass za iPad Air 2019',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/ipad-air3_1.png',
            price: 3900
        },
        {
            name: 'Apple Smart Cover za iPad 10,2"',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/v/mvq42_av1_silver.jpeg',
            price: 9000
        }
    ],
    audio: [
        {
            name: 'Beats Solo³',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/p/mp162zm_a_7.jpg',
            price: 29100
        },
        {
            name: 'Beats Powerbeats Pro',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/v/mv722.jpeg',
            price: 39300
        },
        {
            name: 'Harman/Kardon Onyx Studio 6',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/o/n/onyxstudio6_hero_black_1605x1605.jpg',
            price: 36790
        },
        {
            name: 'Apple bežično kućište za punjenje Apple AirPods slušalica',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/r/mr8u2_av3_3.jpeg',
            price: 13790
        },
        {
            name: 'JBL GO 2',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/b/l/black1_8.jpg',
            price: 4700
        },
        {
            name: 'Beatsˣ',
            img: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/l/mlye2-2_1_2_1.jpeg',
            price: 19600
        }
    ]
};

