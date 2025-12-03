// Component-specific script for Interactive Pyramid
import Alpine from 'alpinejs';

  Alpine.data('pyramidData', () => ({
    // Initial state
    activeLevel: null,
    levels: [
      {
        id: 0,
        name: 'Process',
        description: 'The physical production process where sensors and actuators interact directly with the manufacturing process.',
        color: 'border-purple-500',
        examples: [
          'Sensors (temperature, pressure, flow)',
          'Actuators (valves, motors, relays)',
          'Production equipment',
          'Measurement devices'
        ]
      },
      {
        id: 1,
        name: 'Field/Control',
        description: 'Basic control systems that monitor and adjust the process in real-time.',
        color: 'border-red-500',
        examples: [
          'PLC (Programmable Logic Controllers)',
          'PID controllers',
          'Safety systems',
          'Basic control loops'
        ]
      },
      {
        id: 2,
        name: 'Supervisory Control',
        description: 'Systems that monitor and coordinate multiple control systems across a production area.',
        color: 'border-orange-500',
        examples: [
          'SCADA (Supervisory Control and Data Acquisition)',
          'HMI (Human-Machine Interface)',
          'Production monitoring',
          'Alarm management'
        ]
      },
      {
        id: 3,
        name: 'Manufacturing Operations',
        description: 'Systems that manage production workflow, track materials, and ensure quality.',
        color: 'border-yellow-500',
        examples: [
          'MES (Manufacturing Execution Systems)',
          'Quality management systems',
          'Production scheduling',
          'Material tracking'
        ]
      },
      {
        id: 4,
        name: 'Business Planning & Logistics',
        description: 'Systems that plan production, manage inventory, and handle customer orders.',
        color: 'border-green-500',
        examples: [
          'ERP (Enterprise Resource Planning)',
          'Supply chain management',
          'Inventory management',
          'Order processing'
        ]
      },
      {
        id: 5,
        name: 'Enterprise',
        description: 'Highest level of business planning and strategic decision making.',
        color: 'border-blue-500',
        examples: [
          'Strategic planning',
          'Financial management',
          'Customer relationship management',
          'Business intelligence'
        ]
      }
    ],

    // Initialize component
    init() {
      console.log('Pyramid component initialized');
      
      // Add global keyboard listener for this component
      this.$nextTick(() => {
        window.addEventListener('keydown', this.handleGlobalKeydown.bind(this));
      });
    },

    // Clean up on destroy
    destroy() {
      window.removeEventListener('keydown', this.handleGlobalKeydown.bind(this));
    },

    // Handle global keyboard events
    handleGlobalKeydown(e) {
      if (this.activeLevel === null) return;
      
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          if (this.activeLevel < 5) {
            e.preventDefault();
            this.nextLevel();
          }
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          if (this.activeLevel > 0) {
            e.preventDefault();
            this.previousLevel();
          }
          break;
        case 'Escape':
          e.preventDefault();
          this.activeLevel = null;
          break;
      }
    },

    // Handle pyramid click
    handlePyramidClick(event) {
      const target = event.target;
      if (target.dataset.level) {
        const level = parseInt(target.dataset.level);
        this.activeLevel = level;
      }
    },

    // Get level information
    getLevelName(levelId) {
      const level = this.levels.find(l => l.id === levelId);
      return level ? `Level ${levelId}: ${level.name}` : '';
    },

    getLevelDescription(levelId) {
      const level = this.levels.find(l => l.id === levelId);
      return level ? level.description : '';
    },

    getLevelExamples(levelId) {
      const level = this.levels.find(l => l.id === levelId);
      return level ? level.examples : [];
    },

    getLevelColor(levelId) {
      const level = this.levels.find(l => l.id === levelId);
      return level ? level.color : 'border-gray-300';
    },

    // Navigation methods
    nextLevel() {
      if (this.activeLevel < 5) {
        this.activeLevel++;
      }
    },

    previousLevel() {
      if (this.activeLevel > 0) {
        this.activeLevel--;
      }
    }
  }));
