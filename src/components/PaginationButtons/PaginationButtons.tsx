import React from 'react';

import { cx } from '../../utils';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type PaginationButtonsProps = {
  /**
   * Current page number we're on.
   */
  value: number

  /**
   * Total number of pages available.
   *
   * If omitted, there is no "last" page number that
   * the user can jump to and it will only render
   * buttons for the current page and adjacent page(s).
   */
  totalPages?: number

  /** Event callback when a page number has been activated  */
  onChange: (page: number) => void
};

/**
 * Generate a limited array of page numbers, 1-indexed.
 *
 * Reference: https://stackoverflow.com/a/31836340
 *
 * @param totalPages
 * @param eachSide
 * @param current
 */
function getPagesArray(total: number | undefined, eachSide: number, current: number): number[] {
  let start = 1
  let end = 1

  if (!total) {
    if (current > eachSide + 3) {
      // current is not too close to the beginning
      start = current - eachSide
    }
    end = current + eachSide
  }

  else {
    if (total <= (2 * eachSide) + 5) {
      // Too few pages, so display them all
      start = 1
      end = total
    } else if (current <= eachSide + 3) {
      // current is too close to the beginning
      start = 1
      end = (2 * eachSide) + 3
    } else if (current >= total - (eachSide + 2)) {
      // current is too close to the end
      start = total - (2 * eachSide) - 2
      end = total
    } else {
      // somewhere in the middle
      start = current - eachSide
      end = current + eachSide
    }
  }

  // Add numbers to a list
  const results: number[] = []
  if (start > 1) {
    results.push(1)
  }

  if (start > 3) {
    results.push(-1) // Identifier for '...'
  }

  for (let i = start; i <= end; i++) {
    results.push(i)
  }

  if (!total || end < total - 1) {
    results.push(-1) // Identifier for '...'
  }

  if (total && end < total) {
    results.push(total)
  }

  return results
}

/**
 *
 */
export function PaginationButtons({ value, totalPages, onChange }: PaginationButtonsProps) {
  const range: number[] = getPagesArray(totalPages, 2, value);

  return (
    <nav role="navigation" aria-label="Pagination">
      <ul className="flex justify-center">
        {/* Previous button */}
        <li>
          <UnstyledButton w={40} h={40} p="xs"
            c={value === 1 ? 'gray-tint-20' : 'primary'}
            className={cx(
              'flex',
              {
                'hover:bg-gray-tint-80 hover:text-gray-shade-80': value !== 1,
                'hover:cursor-not-allowed': value === 1
              }
            )}
            onPress={() => onChange(value - 1)}
            disabled={value === 1}
          >
            <Icon name="chevron" rotate={180} size={24} />
            <span className="sr-only">Previous</span>
          </UnstyledButton>
        </li>

        {/* Pages */}
        {range.map((page, idx) =>
          <li key={idx}>
            {page === -1 ?
              <Icon name="dots" w={40} h={40} p="sm" />
              :
              <UnstyledButton w={40} h={40} p="xs"
                c={value === page ? 'gray-shade-80' : 'primary'}
                bgc={value === page ? 'gray-tint-80' : 'clear'}
                className='hover:bg-gray-tint-80 hover:text-gray-shade-80'
                onPress={() => onChange(page)}
                disabled={value === page}
              >
                {page}
                {value === page && <span className="sr-only">current</span>}
              </UnstyledButton>
            }
          </li>
        )}

        {/* Next button */}
        <li>
          <UnstyledButton w={40} h={40} p="xs"
            c={value === totalPages ? 'gray-tint-20' : 'primary'}
            className={cx(
              'flex',
              {
                'hover:bg-gray-tint-80 hover:text-gray-shade-80': value !== totalPages,
                'hover:cursor-not-allowed': value === totalPages
              })}
            onPress={() => onChange(value + 1)}
            disabled={value === totalPages}
          >
            <Icon name="chevron" size={24} />
            <span className="sr-only">Next</span>
          </UnstyledButton>
        </li>
      </ul>
    </nav >
  );
}
