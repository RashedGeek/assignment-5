import type { Technology } from "./type";

type StackProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function Stack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackProps) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTechnologies.length} technologies selected
          </p>
        </div>

        {/* Remove All Button */}
        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600 cursor-pointer"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-500">
            Your stack is empty.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-6 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              {/* Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-9 w-9 object-contain"
              />

              {/* Technology Info */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove Single Technology */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="text-lg  cursor-pointer text-gray-400 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Stack;