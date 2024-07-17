import React from "react";

export function useVisibleItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const intersectingIds = React.useRef<Set<string>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingIds.current.add(entry.target.id);
          } else {
            intersectingIds.current.delete(entry.target.id);
          }
        });

        const activeItem = itemIds.findLast((id) =>
          intersectingIds.current.has(id)
        );
        setActiveId(activeItem || null);
      },
      {
        rootMargin: `0% 0% -80% 0%`,
        threshold: 0.1,
      }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}
