document.addEventListener('DOMContentLoaded', () => {
  // Interactive Region Map Logic
  const regions = document.querySelectorAll('.map-region');
  const panels = document.querySelectorAll('.region-panel');

  if (regions.length > 0 && panels.length > 0) {

    // Function to set active region
    const setActiveRegion = (regionId) => {
      // Remove active class from all regions and panels
      regions.forEach(r => r.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Add active class to selected region
      const selectedRegion = document.getElementById(regionId);
      if (selectedRegion) {
        selectedRegion.classList.add('active');
      }

      // Add active class to corresponding panel
      const targetPanelId = 'panel-' + regionId;
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        // Update aria attributes for accessibility
        panels.forEach(p => p.setAttribute('hidden', ''));
        targetPanel.removeAttribute('hidden');
      }
    };

    // Add click and keyboard events to regions
    regions.forEach(region => {
      // Make focusable
      region.setAttribute('tabindex', '0');

      region.addEventListener('click', () => {
        setActiveRegion(region.id);
      });

      region.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveRegion(region.id);
        }
      });
    });

    // Set initial active region (Atacama)
    if (document.getElementById('atacama')) {
      setActiveRegion('atacama');
    }
  }
});
