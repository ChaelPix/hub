# STM32 Nucleo

## Introduction
- Carte de développement basée sur un microcontrôleur STM32
- Architecture ARM Cortex-M
- Intègre un debugger ST-LINK

## Configuration Hardware
### Pins et Ports
- GPIO : General Purpose Input/Output
  - Mode Input/Output/Alternate/Analog
  - Push-pull ou Open-drain
  - Pull-up/Pull-down
- Clock System :
  - HSI : High Speed Internal (16MHz)
  - HSE : High Speed External (dépend du crystal)
  - PLL : Phase-Locked Loop pour multiplication

### Périphériques Principaux
- UART/USART : Communication série
- Timers : PWM, capture, comptage
- ADC : Conversion analogique-digital
- I2C/SPI : Communication avec capteurs

## Développement
### STM32CubeIDE
1. Création Projet
   - Sélection de la carte
   - Configuration des pins
   - Génération du code

2. Structure Projet
   ```
   Core/
     Src/
       main.c
       stm32xx_it.c
     Inc/
       main.h
   Drivers/
     STM32XX_HAL_Driver/
   ```

### Commandes Essentielles
```bash
# Compilation
make all

# Flash
make flash

# Debug
make debug
```

## Points Critiques
- Toujours initialiser le clock system
- Vérifier les conflits de pins
- Activer les périphériques dans CubeMX
- Gérer les interruptions correctement

## Ressources
- [Documentation STM32](https://www.st.com/resource/en/reference_manual/)
- [HAL Driver Manual](https://www.st.com/resource/en/user_manual/)
- [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)

## Exemple Configuration UART
```c
/* UART Handle */
UART_HandleTypeDef huart2;

/* Configuration */
huart2.Instance = USART2;
huart2.Init.BaudRate = 115200;
huart2.Init.WordLength = UART_WORDLENGTH_8B;
huart2.Init.StopBits = UART_STOPBITS_1;
huart2.Init.Parity = UART_PARITY_NONE;

/* Initialisation */
HAL_UART_Init(&huart2);
```

