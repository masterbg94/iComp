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
            available: true,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,0 GHz 6-core Intel Core i5 8. generacije Turbo Boost do 4,1 GHz',
                        price: 0
                    },
                    {
                        name: '3,2GHz 6-core 8th-generation Intel Core i7, Turbo Boost do 4,6GHz',
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
            ram: '8 GB 2400 MHz DDR4',
            storage: '256GB SSD',
            gpu: 'Radeon Pro 555X sa 2GB GDDR5',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 205100,
            img: '/assets/images/imac/imac.png',
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
            ram: '8 GB 2666 MHz DDR4',
            storage: '256 GB SSD',
            gpu: 'Radeon Pro 5300 sa 4 GB GDDR6',
            other: 'Dva Thunderbolt 3 ulaza',
            price: 290600,
            img: '/assets/images/imac/imac.png',
            available: true,
            detailImg: 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/m/imac-21-retina-selection-hero-201903_4.jpeg',
            productConfig: {
                cpuConfig: [
                    {
                        name: '3,7 GHz 6-core Intel Core i5 9. generacije Turbo Boost do 4,6 GHz',
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
                        colorName: '(PRODUCT)RED'
                    },
                    {
                        colorName: 'White'
                    },
                    {
                        colorName: 'Black'
                    },
                    {
                        colorName: 'Yellow'
                    },
                    {
                        colorName: 'Coral'
                    },
                    {
                        colorName: 'Blue'
                    }
                ]
            }
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
                        colorName: 'Silver'
                    }
                ]
            }
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
                        colorName: '(PRODUCT)RED'
                    },
                    {
                        colorName: 'White'
                    },
                    {
                        colorName: 'Black'
                    },
                    {
                        colorName: 'Yellow'
                    },
                    {
                        colorName: 'Coral'
                    },
                    {
                        colorName: 'Blue'
                    }
                ]
            }
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
                        colorName: 'Space Gray'
                    },
                    {
                        colorName: 'Silver'
                    },
                    {
                        colorName: 'Gold'
                    },
                    {
                        colorName: 'Midnight Green'
                    }
                ]
            }
        }
    ],
    ipads: [
        {
            name: 'ipad',
            description: 'ipad1  description',
            screenSize: 'number'
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
            price: '125.900',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
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
            price: '163.300 RSD',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
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
            price: '163.300 RSD',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbookairpure.jpg',
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
            price: '159.900',
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
            storage: '256 GB SSD',
            gpu: 'Intel Iris Plus 645',
            other: 'Butterfly Keyboard , Touch Bar , Dva Thunderbolt 2 ulaz',
            price: '179.900',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
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
            id: 22,
            name: 'MacBook Air 13 256GB Silver',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '2,4 GHz 4-core procesor Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8GB 2133 MHz LPDDR3',
            storage: '256 GB SSD',
            gpu: 'Intel Iris Plus 655',
            other: 'Butterfly Keyboard , Touch Bar , Četiri Thunderbolt 3 ulaza',
            price: '204.900',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            img: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
            available: false,
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
            id: 23,
            name: 'MacBook Air 13 512GB Space Gray',
            screenSize: 13,
            display: 'True Tone Retina displej',
            cpu: '2,4 GHz 4-core procesor Intel Core i5 8. generacije',
            cpuTurbo: 'Turbo Boost do 4,1 GHz',
            ram: '8GB 2133 MHz LPDDR3',
            storage: '512 GB SSD',
            gpu: 'Intel Iris Plus 655',
            other: 'Butterfly Keyboard , Touch Bar , Četiri Thunderbolt 3 ulaza',
            price: '225.900',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-silver-select-201807_1_.jpeg',
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
            storage: '512 GB SSD',
            gpu: 'Radeon Pro 5300M sa 4 GB GDDR6',
            other: 'Dva USB ulaza , Jedan Thunderbolt 2 ulaz, Čitač SDXC kartica',
            price: '373.600',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mbp13touch-space-select-201807_1_5.jpeg',
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
            storage: '1 TB SSD',
            gpu: 'Radeon Pro 5500M sa 4 GB GDDR6',
            other: 'Dva USB ulaza , Jedan Thunderbolt 2 ulaz, Čitač SDXC kartica',
            price: '442.500',
            detailImg: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/a/macbook_pro_16-in_touch_bar_pure_top_open_silver_wwen_screen-1_8_4.jpg',
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
    ]
};
