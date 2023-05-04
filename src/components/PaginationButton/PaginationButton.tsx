import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type PaginationButtonProps = StyleSystemProps & {

  /** 
   * Current page number we're on.
   * 
   * If omitted, default value is `1`. 
   */
  value?: number

  /**
   * Total number of pages available.
   * 
   * If omitted, there is no "last" page number that 
   * the user can jump to and it will only render
   * buttons for the current page and adjacent page(s). 
   */
  totalPages?: number

  /** Event callback when a page number has been activated  */
  onChange?: (page: number | undefined) => void
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
function getPagesArray(total: number | undefined, eachSide: number, current: number): string[] {
  let start = 1
  let end = 1

  if (!total) {
    let left;
    let right;

    return []
  }

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

  const results: string[] = []
  if (start > 1) {
    results.push('1')
  }

  if (start > 3) {
    results.push('...')
  }

  for (let i = start; i <= end; i++) {
    results.push(i.toString())
  }

  if (end < total - 1) {
    results.push('...')
  }

  if (end < total) {
    results.push(total.toString())
  }

  return results
}

/**
 *
 */
export function PaginationButton(props: PaginationButtonProps) {
  // if (!props.totalPages) {
  //   return
  // }

  const range: string[] = getPagesArray(props.totalPages ?? 100, 2, props.value ?? 20);

  return (
    <nav role="navigation" aria-label="Pagination" style={{ fontFamily: 'BuckeyeSans, HelveticaNeue, Helvetica, Arial, sans-serif' }}>
      <ul className="rui-flex"
      >
        {/* Previous button */}
        <li>
          {/* <a href="#" aria-label="Previous" onClick={() => previous(props)}
            className={cx(
              'rui-table-cell rui-text-center',
              (!props.value || props.value === 1) ? 'rui-text-gray-tint-20 rui-cursor-default' : 'rui-text-scarlet',
            )}
            style={{ width: '40px', height: '40px', padding: '8px' }}
          >
            <Icon name="chevron" rotate={180} size={25} />
            <span className="rui-sr-only">Previous</span>
          </a> */}
          <UnstyledButton w={40} h={40} p="xs" c={(!props.value || props.value === 1) ? 'gray-tint-20' : 'scarlet'} fw="semibold"
            onClick={() => props.onChange ? props.onChange(props.value ? props.value - 1 : undefined) : null} disabled={(!props.value || props.value === 1)}
            className={cx({
              'hover:rui-bg-gray-tint-80 hover:rui-text-gray-shade-80': !(!props.value || props.value === 1),
              'hover:rui-cursor-not-allowed': (!props.value || props.value === 1)
            })}
          >
            <Icon name="chevron" rotate={180} size={25} />
            <span className="rui-sr-only">Previous</span>
          </UnstyledButton>
        </li>

        {range.map((page, idx) =>
          <li key={idx}>
            {page === '...' ?
              <span className="rui-table-cell rui-text-center rui-cursor-default" style={{ width: '40px', height: '40px', padding: '8px' }}>{page}</span>
              :
              // <a href="#" aria-label={'Go to page ' + page} onClick={() => changePage(props, page)}
              //   className={cx(
              //     'rui-table-cell rui-text-center',
              //     (!props.value && page === '1' || props.value?.toString() === page) ? 'rui-text-gray-shade-80 rui-bg-gray-tint-80 rui-cursor-default' : 'rui-text-scarlet',
              //   )}
              //   style={{
              //     width: '40px',
              //     height: '40px',
              //     padding: '8px'
              //   }}
              // >
              //   {page}
              //   {/* {isCurrent && <span className="sr-only">(current)</span>} */}
              // </a>
              <Button w={40} h={40} p="xs" c="scarlet" bgc="aqua"

                onClick={() => props.onChange ? props.onChange(parseInt(page)) : null} disabled={(!props.value || props.value === 1) ? true : false} >
                {page}
              </Button>
            }
          </li>
        )}

        {/* Next button */}
        <li>
          <a href="#" aria-label="Next" //onClick={onClick}
            className={cx(
              'rui-table-cell rui-text-center',
              (props.value === props.totalPages) ? 'rui-text-gray-tint-20' : 'rui-text-scarlet',
            )}


            style={{
              width: '40px',
              height: '40px',
              padding: '8px'
            }}
          >
            <Icon name="chevron" size={25} />
            <span className="rui-sr-only">Next</span>
          </a>
        </li>

      </ul>
    </nav >
  );
}
